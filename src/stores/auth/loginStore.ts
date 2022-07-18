import { defineStore } from 'pinia';
// import Axios from '@/axios/request';
import axios from 'axios';

export const useLoginStore = defineStore({
    id: 'loginStore',
    state: () => ({
        // counter: 0
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2
    },
    actions: {
        async login(formInfo: {}) {
            console.log('formInfo', formInfo);

            console.log(import.meta.env);

            try {
                const res = await axios.post(
                    'manager-api/v2/auth/signIn',
                    formInfo
                );
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
