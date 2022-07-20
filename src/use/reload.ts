import { ElNotification } from 'element-plus';

export const reload = () => {
    if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
        console.log('reloaded');

        ElNotification({
            title: 'Prompt',
            message: 'token is expired',
            duration: 10000
        });
        
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
};
