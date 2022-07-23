<template>
    <el-table
        :data="tableData"
        @sort-change="sortPage"
        border
        style="width: 100%"
    >
        <el-table-column type="expand">
            <template #default="props">
                {{ props.row }}
            </template>
        </el-table-column>

        <el-table-column label="ID" prop="id" sortable />

        <el-table-column label="Code" prop="code" sortable />

        <el-table-column label="dt_start" prop="dt_start" sortable />

        <el-table-column label="dt_end" prop="dt_end" sortable />

        <el-table-column label="image_link" prop="image_link" sortable>
            <template #default="scope">
                <a :href="scope.row.image_link" download="" target="_blanc">
                    Скачать</a
                >
            </template>
        </el-table-column>

        <el-table-column label="type_id" prop="type_id" sortable />

        <el-table-column label="category_id" prop="category_id" sortable />
    </el-table>

    <ElPagination
        background
        style="margin-top: 10px"
        layout="total, sizes, prev, pager, next"
        :total="pageData.totalElements"
        v-model:current-page="pageData.page"
        :page-sizes="[10, 20, 30, 40]"
        :pager-count="21"
        v-model:page-size="pageData.size"
        @current-change="changePage"
        @size-change="handleSizeChange"
    />
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import { ElTable } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useDiscountsPageStore } from '../../../stores/promotion/discounts/discountsPageStore';

const discountsPageStore = useDiscountsPageStore();

const pageData = ref({
    page: 1,
    size: 10,
    sort: 'id,desc',
    totalElements: 0
});

// interface discountsPage {
//     category_id: number;
//     code: string;
//     discount_terms: [];
//     dt_end: string;
//     dt_start: string;
//     id: number;
//     image_link: string;
//     name_ml: {};
//     type_id: number;
//     ware_reference: string;
// }

const tableData = ref([]);

const requestDiscountsPage = async () => {
    const params = {
        page: pageData.value.page,
        size: pageData.value.size,
        sort: pageData.value.sort,
        show_all: true
    };

    await discountsPageStore.REQUEST_DISCOUNT_PAGE(params);

    tableData.value = discountsPageStore.GET_DISCOUNT_PAGE.content;

    pageData.value.totalElements =
        discountsPageStore.GET_DISCOUNT_PAGE.totalElements;
};

onMounted(() => {
    requestDiscountsPage();
    console.log('BASE_URL', import.meta.env.BASE_URL);
});

const changePage = (v: number) => {
    pageData.value.page = v;
    requestDiscountsPage();
};

const handleSizeChange = (v: number) => {
    pageData.value.size = v;
    requestDiscountsPage();
};

interface DiscountsPage {
    category_id: number;
    code: string;
    discount_terms: [
        {
            actor_ids: number[];
            actor_type_ids: number[];
            city_id: number;
            id: number;
            percentage: number;
            price_new: number;
            price_old: number;
        }
    ];
    dt_end: string;
    dt_start: string;
    id: number;
    image_link: string;
    name_ml: { ru: string; kk: string; en: string };
    type_id: number;
    ware_reference: string;
}

const sortPage = (column: TableColumnCtx<DiscountsPage>) => {
    if (column.prop.includes('ru')) {
        column.prop = column.prop.slice(0, -3);
    }
    pageData.value.sort = `${column.prop},${
        column.order === 'ascending' ? 'asc' : 'desc'
    }`;

    requestDiscountsPage();
};
</script>
