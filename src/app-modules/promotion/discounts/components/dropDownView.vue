<template>
    <el-form :model="formInfo" label-width="120px">
        <el-form-item label="Activity name">
            <el-select
                v-model="formInfo.tags"
                multiple
                filterable
                placeholder="Select"
                style="width: 240px"
            >
                <el-option
                    v-for="item in data.discount_terms"
                    :key="item.id"
                    :label="item.id"
                    :value="item.id"
                />
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import type { DiscountsPageType } from '../types/discounts.page.type';
import { reactive } from 'vue';

const props = defineProps<{
    data: DiscountsPageType;
}>();

console.log(props.data);

const formInfo = reactive({
    tags: props.data.discount_terms
});

// const onSubmit = () => {
//     console.log('submit!');
// };
</script>
