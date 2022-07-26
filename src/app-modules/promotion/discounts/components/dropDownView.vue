<template>
    <el-form :model="formInfo" label-width="120px">
        <el-form-item label="Activity name">
            <el-select
                v-model="formInfo.tags"
                multiple
                placeholder="Select"
                style="width: 240px"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import type { DiscountsPageType } from '../types/discounts.page.type';
import { reactive } from 'vue';

defineProps<{
    data: DiscountsPageType;
}>();

const formInfo = reactive({
    tags: []
});

// const onSubmit = () => {
//     console.log('submit!');
// };
</script>
