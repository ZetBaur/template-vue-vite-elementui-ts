<template>
    <el-card class="box-card">
        <el-form :model="formInfo" label-width="120px">
            <el-form-item label="Login">
                <el-input v-model="formInfo.name" />
            </el-form-item>

            <el-form-item label="Пароль">
                <el-input v-model="formInfo.password" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submit">Войти</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const formInfo = reactive({
    name: null,
    password: ''
});

const submit = () => {
const params = {}



};
</script>


<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>
