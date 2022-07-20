import { defineStore } from 'pinia';
import Axios from '../../../axios/request';

interface DiscountPage {
    content: [];
    page: number;
    size: number;
    sort: string;
    totalElements: number;
    totalPages: number;
}

export const useDiscountsPageStore = defineStore({
    id: 'discontsPageStore',

    state: () => ({
        discountsPage: [] as unknown as DiscountPage
    }),

    getters: {
        GET_DISCOUNT_PAGE: (state) => state.discountsPage
    },

    actions: {
        async requestDiscountsPage(params: {}) {
            try {
                const { __wrapped__ } = await Axios.get(
                    '/manager-api/v2/promotion/discounts/page',
                    {
                        params
                    }
                );

                console.log(__wrapped__.data);

                this.discountsPage = __wrapped__.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
});
