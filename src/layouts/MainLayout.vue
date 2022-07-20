<template>
    <el-config-provider :locale="locale">
        <div class="common-layout">
            <el-container>
                <!-- <el-aside width="200px">Aside</el-aside> -->
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

import ru from 'element-plus/lib/locale/lang/ru';

export default defineComponent({
    components: {
        ElConfigProvider
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
</style>
