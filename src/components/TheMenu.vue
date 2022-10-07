<template>
    <el-menu
        ref="target"
        default-active="2"
        class="el-menu-vertical"
        :collapse="isCollapse"
        router
    >
        <TheLogo />

        <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>

                <span>Navigator One</span>
            </template>

            <!-- ------- -->

            <el-menu-item-group>
                <el-menu-item
                    index="/vue_flow"
                    :route="{ name: 'VueFlow' }"
                    >item one</el-menu-item
                >
                <el-menu-item
                    index="/login"
                    :route="{ name: 'LoginPage' }"
                    >item two</el-menu-item
                >
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
            <el-icon><location /></el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>

        <!-- ------- -->

        <el-menu-item index="4">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>

        <!-- ------- -->

        <MenuToggleIcon
            @click="expandMenu"
            class="menu-toggle-icon"
        />
    </el-menu>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Location } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
const isCollapse = ref(true);
const target = ref(null);
onClickOutside(target, () => (isCollapse.value = true));
const expandMenu = () => (isCollapse.value = false);
</script>

<style lang="scss">
.menu-toggle-icon {
    cursor: pointer;
    &:hover {
        fill: grey;
    }
}
.el-menu {
    position: relative;

    background: #222222 !important;
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
    width: 200px;
    min-height: 400px;
}
</style>
