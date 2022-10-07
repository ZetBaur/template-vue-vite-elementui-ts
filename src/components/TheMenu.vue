<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->

    <el-menu
        ref="target"
        default-active="2"
        class="el-menu-vertical"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-menu-item index="0">
            <TheLogo />
        </el-menu-item>

        <el-sub-menu index="1">
            <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <ExampleMenuIcon />
                <span>Navigator One</span>
            </template>

            <!-- ------- -->

            <el-menu-item-group>
                <!-- <template #title><span>Group One</span></template> -->
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>

            <!-- ------- -->

            <el-menu-item-group>
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>

            <!-- ------- -->

            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>

        <!-- ----------------------------------------------------------------- -->

        <el-menu-item index="2">
            <ExampleMenuIcon />
            <template #title>Navigator Two</template>
        </el-menu-item>

        <!-- ------- -->

        <el-menu-item index="4">
            <ExampleMenuIcon />
            <template #title>Navigator Four</template>
        </el-menu-item>

        <!-- ------- -->

        <el-menu-item
            index="5"
            @click.self="expandMenu"
            v-show="isCollapse === true"
        >
            <MenuToggleIcon />
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ExampleMenuIcon from './icons/ExampleMenuIcon.vue';
import TheLogo from './icons/TheLogo.vue';

import MenuToggleIcon from './icons/MenuToggleIcon.vue';
import { onClickOutside } from '@vueuse/core';

const target = ref(null);
onClickOutside(target, () => (isCollapse.value = true));

const expandMenu = () => (isCollapse.value = false);

const isCollapse = ref(true);

const handleOpen = (key: string, keyPath: string[]) => {
    console.log('handleOpen', key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log('handleClose', key, keyPath);
};
</script>

<style lang="scss">
.el-menu {
    background: #222222 !important;
    padding-top: 38px !important;

    & svg {
        margin-right: 5px !important;
    }
}

.el-sub-menu__title {
    color: #ffffff !important;

    &:hover {
        background-color: #3c3c3c !important;
    }
}

.el-menu-item {
    color: #ffffff !important;

    &:hover {
        background-color: #3c3c3c !important;
    }
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
}

.el-menu--collapse {
    width: 77.89px !important;
}
</style>
