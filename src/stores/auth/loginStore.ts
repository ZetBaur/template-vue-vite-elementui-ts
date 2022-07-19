import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../../router';

export const useLoginStore = defineStore({
    id: 'loginStore',

    state: () => ({
        auth_token: localStorage.getItem('auth_token'),
        refresh_token: localStorage.getItem('refresh_token')
    }),

    getters: {
        getToken: (state) => state.auth_token,
        getRefreshToken: (state) => state.refresh_token,
        authenticated: (state) => !!state.auth_token
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
                router.push('/discounts_page');
            } catch (error) {
                console.log(error);
            }
        }
    }
});
