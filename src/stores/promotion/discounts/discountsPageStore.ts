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

interface Params {
    page: number;
    size: number;
    sort: string;
    show_all: boolean;
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
        async REQUEST_DISCOUNT_PAGE(params: Params) {
            try {
                const resp = await Axios.get(
                    import.meta.env.BASE_URL +
                        'manager-api/v2/promotion/discounts/page',
                    {
                        params
                    }
                );

                this.discountsPage = resp.__wrapped__.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
});
