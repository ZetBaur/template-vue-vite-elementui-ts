<template>
    <el-config-provider :locale="locale">
        <router-view />
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
