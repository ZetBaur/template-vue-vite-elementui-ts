import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/app-modules/auth/Login.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/login',
            name: 'Login',
            alias: '/',
            component: Login,
            meta: {
                layout: 'auth',
                auth: false
            }
        },

        {
            path: '/discounts_page',
            name: 'DiscountsPage',
            component: () =>
                import('../app-modules/promotion/discounts/DiscountsPage.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        }
    ]
});

export default router;
