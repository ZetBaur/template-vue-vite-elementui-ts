import router from '@/router';
import axios from 'axios';

const requestAxios = axios.create({
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('token'),
		'Content-Type': 'application/json'
	}
});

// ----------------------------------------

requestAxios.interceptors.response.use(
	resp => {},
	error => {
		if (error.response.status === 401) {
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
