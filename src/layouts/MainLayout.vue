<template>
    <el-container class="layout-container-demo" style="height: 500px">
        <!-- <el-aside width="200px"> -->
        <el-scrollbar>
            <TheMenu />
        </el-scrollbar>
        <!-- </el-aside> -->

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
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

            <el-main>
                <el-scrollbar>
                    <router-view />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';

// const item = {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
// };
// const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
    border-right: none;
}
.layout-container-demo .el-main {
    padding: 0;
}
.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>

<!-- <template>
    <el-config-provider :locale="locale">
        <div class="common-layout">
            <el-container>
                <el-aside width="200px"><TheMenu /></el-aside>

                <el-container>
                    <el-header>Header</el-header>
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import TheMenu from '@/components/TheMenu.vue';

import ru from 'element-plus/lib/locale/lang/ru';

export default defineComponent({
    components: {
        ElConfigProvider,
        TheMenu
    },
    setup() {
        return {
            locale: ru
        };
    }
});
</script>

<style lang="scss">
.main {
    padding: 16px;
}
</style> -->
