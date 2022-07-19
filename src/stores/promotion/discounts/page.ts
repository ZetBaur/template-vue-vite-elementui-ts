import { defineStore } from 'pinia';
import Axios from '../../../axios/request';

export const useDiscountsPageStore = defineStore({
    id: 'discontsPageStore',

    state: () => ({
        discountsPage: []
    }),

    getters: {
        getDiscountsPage: (state) => state.discountsPage
    },

    actions: {
        async requestDiscountsPage(params: {}) {
            try {
                const data = await Axios.get(
                    '/manager-api/v2/promotion/discounts/page',
                    {
                        params
                    }
                );
                console.log(data.__wrapped__.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
