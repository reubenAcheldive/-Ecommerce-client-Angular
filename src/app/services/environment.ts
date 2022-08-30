export const BASE_URI = 'http://localhost:3000';
export const URL_LOGIN = `${BASE_URI}/api/users/login`;
export const API_LOGIN_CHECK_JWT = `${BASE_URI}/api/checkPromotion`;
export const URL_FIRST_STEP_REGISTER = `${BASE_URI}/api/users/register/user-check`;
export const URL_STEP_TWO_REGISTER = `${BASE_URI}/api/users/register`;
export const CITIES_URL = `${BASE_URI}/api/store/cities`;
export const BASE_URI_STORE = `${BASE_URI}/api/store`;
export const GET_USER_DETAILS = `${BASE_URI_STORE}/getUserDetails`;
export const CREATE_NEW_ORDER = `${BASE_URI_STORE}/CreateOrder`;
export const GET_LAST_ORDER = `${BASE_URI_STORE}/getLastOrder`;
export const GET_ALL_ORDER = `${BASE_URI_STORE}/all-orders`;
export const RESPITES = `${BASE_URI}/respites`;
export const CHECK_ORDER_DATE = `${BASE_URI_STORE}/check-order-date`;
export const GET_CATEGORY = `${BASE_URI_STORE}/category`;
export const EDIT_USER_PERSONAL_DETAILS = `${BASE_URI}/api/users/update-user`;
export const SEARCH_PRODUCT_BY_NAME = `${BASE_URI_STORE}/search/name`;
export const ALL_PRODUCT_QUN = `${BASE_URI_STORE}/all-product-available`;
export const EDIT_PRODUCT = `${BASE_URI_STORE}/edit-product`;
export const NEW_PRODUCT = `${BASE_URI_STORE}/add-new-product`;
export const GET_ADDRESS = `${BASE_URI_STORE}/addresses`;

export const URL_ADD_NEW_CART = `${BASE_URI_STORE}/addNewCart`;
export const URL_ADD_ITEMS_ARRAY_TO_CART = `${BASE_URI_STORE}/add-all-items-to-cart`;
export const URL_DELETE_PRODUCT = `${BASE_URI_STORE}/deleteProduct`;
export const URL_DELETE_ALL_PRODUCT = `${BASE_URI_STORE}/deleteAllProducts`;
export const URL_GET_CART_BY_CUSTOMER_ID = `${BASE_URI_STORE}/getCart`; // customerRef params
export const API_GET_CART_BY_CART_ID = `${BASE_URI_STORE}/getByCartId`; // cartId params
export const api_url_change_quantity = `${BASE_URI_STORE}/update-one-item-cart`;

//--------------- payment
export const Url_Get_All_Payment = `${BASE_URI_STORE}/payment`;
export const Url_Add_New_Payment = `${Url_Get_All_Payment}/add-new-payment`;
export const Url_Update_One_Payment = `${Url_Get_All_Payment}/add-new-payment`;
export const Url_Delete_On_Payment = (_id:string) => `${Url_Get_All_Payment}/${_id}`
