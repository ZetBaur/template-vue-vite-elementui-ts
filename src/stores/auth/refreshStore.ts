import { defineStore } from 'pinia';
import { useLoginStore } from '../../stores/auth/loginStore';

import axios from 'axios';
// import router from '../../router';

const loginStore = useLoginStore();

export const useRefreshStore = defineStore({
    id: 'refreshStore',

    actions: {
        async refresh() {
            const params = {
                refresh_token: loginStore.getRefreshToken
            };
            try {
                const { data } = await axios.post(
                    'manager-api/v2/auth/refresh',
                    params
                );
                localStorage.setItem('auth_token', data.auth_token);
                localStorage.setItem('refresh_token', data.refresh_token);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
