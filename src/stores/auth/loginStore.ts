import { defineStore } from 'pinia';
import axios from 'axios';

export const useLoginStore = defineStore({
    id: 'loginStore',

    state: () => ({
        auth_token: localStorage.getItem('auth_token'),
        refresh_token: localStorage.getItem('refresh_token')
    }),

    getters: {
        getToken: (state) => state.auth_token,
        getRefreshToken: (state) => state.refresh_token
    },

    actions: {
        async login(formInfo: {}) {
            try {
                const { data } = await axios.post(
                    'manager-api/v2/auth/signIn',
                    formInfo
                );
                console.log(data);
                localStorage.setItem('auth_token', data.auth_token);
                localStorage.setItem('refresh_token', data.refresh_token);
            } catch (error) {
                console.log(error);
            }
        },

        async refresh(info: {}) {
            console.log('info', info);
            console.log(import.meta.env);
            try {
                const { data } = await axios.post(
                    'manager-api/v2/auth/refresh',
                    info
                );
                console.log(data);
                localStorage.setItem('auth_token', data.auth_token);
                localStorage.setItem('refresh_token', data.refresh_token);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
