import router from '@/router';
import axios from 'axios';

import { useLoginStore } from '../stores/auth/loginStore';
import { useRefreshStore } from '../stores/auth/refreshStore';

const loginStore = useLoginStore();
const refreshStore = useRefreshStore();

const requestAxios = axios.create({
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
        'Content-Type': 'application/json'
    }
});

// ----------------------------------------

requestAxios.interceptors.response.use(
    (resp) => {},
    async (error) => {
        if (
            error.response.data.message === 'wrong token' &&
            loginStore.getRefreshToken
        ) {
            await refreshStore.refresh();
        } else {
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

// ----------------------------------------

// requestAxios.interceptors.request.use(
//     (config) => {
//         if (!config.headers.Authorization) {
//             const token = localStorage.getItem('token')
//             if (token) {
//                 config.headers.Authorization = token
//             }
//         }
//         return config
//     },
//     (error) => Promise.reject(error)
// )

export default requestAxios;
