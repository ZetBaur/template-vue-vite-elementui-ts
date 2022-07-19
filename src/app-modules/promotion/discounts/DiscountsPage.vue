<template>
    <el-table
        :data="tableData"
        @sort-change="sortPage"
        border
        style="width: 100%"
    >
        <el-table-column type="expand">
            <template #default="props">
                <div m="4">
                    <p m="t-0 b-2">State: {{ props.row.state }}</p>
                    <p m="t-0 b-2">City: {{ props.row.city }}</p>
                    <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                    <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
                    <h3>Family</h3>
                    <el-table :data="props.row.family" border>
                        <el-table-column label="Name" prop="name" />
                        <el-table-column label="State" prop="state" />
                        <el-table-column label="City" prop="city" />
                        <el-table-column label="Address" prop="address" />
                        <el-table-column label="Zip" prop="zip" />
                    </el-table>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Date" prop="date" sortable />
        <el-table-column label="Name" prop="name" sortable />
    </el-table>

    <ElPagination
        background
        style="margin-top: 10px"
        layout="total, sizes, prev, pager, next"
        :total="pageData.totalElements"
        :current-page.sync="pageData.page"
        :page-sizes="[10, 20, 30, 40]"
        :pager-count="21"
        :page-size.sync="pageData.size"
        @current-change="changePage"
        @size-change="handleSizeChange"
    />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Axios from '../../../axios/request';

const pageData = reactive({
    page: 1,
    size: 10,
    sort: 'id,desc',
    totalElements: null
});

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    }
];

const getDiscountsPage = () => {
    const params = {
        // actor_id: null,
        // actor_type_id: null,
        // category_id: null,
        // city_id: null,
        // type_id: null,
        page: pageData.page,
        size: pageData.size,
        sort: pageData.sort,
        show_all: true
    };

    try {
        const res = Axios.get('/manager-api/v2/promotion/discounts/page', {
            params
        });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

const changePage = (v) => {
    pageData.page = v;
    getDiscountsPage();
};

const handleSizeChange = (v) => {
    pageData.size = v;
    getDiscountsPage();
};

const sortPage = (column, prop, order) => {
    if (column.prop.includes('ru')) {
        column.prop = column.prop.slice(0, -3);
    }
    pageData.sort = `${column.prop},${
        column.order === 'ascending' ? 'asc' : 'desc'
    }`;

    getDiscountsPage();
};
</script>
