export interface DiscountsPageType {
    category_id: number;
    code: string;
    discount_terms: DiscountTermType[];
    dt_end: string;
    dt_start: string;
    id: number;
    image_link: string;
    name_ml: NameMlType;
    type_id: number;
    ware_reference: string;
}

export interface DiscountTermType {
    actor_ids: number[];
    actor_type_ids: number[];
    city_id: number;
    id: number;
    percentage: number;
    price_new: number;
    price_old: number;
}

export interface NameMlType {
    en: string;
    kk: string;
    ru: string;
}

export interface ColumnType {
    order: string;
    prop: string;
}
