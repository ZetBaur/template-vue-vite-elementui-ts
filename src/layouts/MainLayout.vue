<template>
    <el-container class="layout-container">
        <div class="upper-wrapper">
            <TheMenu />

            <el-container class="main-wrapper">
                <el-header
                    class="header"
                    style="text-align: right; font-size: 12px"
                >
                    <div class="toolbar">
                        <el-dropdown>
                            <el-icon style="margin-right: 8px; margin-top: 1px"
                                ><setting
                            /></el-icon>

                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>View</el-dropdown-item>
                                    <el-dropdown-item>Add</el-dropdown-item>
                                    <el-dropdown-item>Delete</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <span>Tom</span>
                    </div>
                </el-header>

                <el-main class="main">
                    <el-scrollbar>
                        <router-view />
                    </el-scrollbar>
                </el-main>
            </el-container>
        </div>
    </el-container>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue';
</script>

<style lang="scss">
.header {
    background: #fff !important;
}

.upper-wrapper {
    background: #222222 !important;
    display: flex;
    width: 100%;
}

.main-wrapper {
    border-radius: 30px 0 0 30px;
    overflow: hidden;
}

.main {
    background: #fff !important;
    padding: var(--main-gutter) !important;
}

.layout-container {
    height: 100%;
}

.layout-container .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container .el-menu {
    border-right: none;
}

.layout-container .el-main {
    padding: 0;
}

.layout-container .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
