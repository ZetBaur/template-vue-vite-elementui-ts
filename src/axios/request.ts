import router from '@/router';
import axios from 'axios';
import _ from 'lodash';

import { useLoginStore } from '../stores/auth/loginStore';
import { useRefreshStore } from '../stores/auth/refreshStore';

import { ElNotification } from 'element-plus';

const loginStore = useLoginStore();
const refreshStore = useRefreshStore();

const requestAxios = axios.create({
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
        'Content-Type': 'application/json'
    }
});

// ----------------------------------------

requestAxios.interceptors.response.use(_, async (error) => {
    if (
        (error.response.data.message === 'token is expired' ||
            error.response.data.message === 'wrong token') &&
        loginStore.getRefreshToken
    ) {
        console.dir(error);

        ElNotification({
            title: 'Prompt',
            message: 'token is expired',
            duration: 10000
        });
        await refreshStore.refresh();
    } else {
        router.push('/login');

        ElNotification({
            title: 'Prompt',
            message: 'You must login',
            duration: 10000
        });
    }
    return Promise.reject(error);
});

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
