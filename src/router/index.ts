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
                import(
                    '../app-modules/promotion/discounts/DiscountsPageView.vue'
                ),
            meta: {
                layout: 'main',
                auth: false
            }
        },

        {
            path: '/vue_flow',
            name: 'VueFlow',
            component: () => import('../templates/diagram/VueFlow.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        }
    ]
});

export default router;
