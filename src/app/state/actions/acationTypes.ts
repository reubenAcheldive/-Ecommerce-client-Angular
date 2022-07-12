export const CategoriesTypes = {
  init: '[Init Categories] fetch Categories',
  success: '[ Success Categories] fetch Categories ',
  failure: '[ Failure Categories] fetch Categories ',
};

export const ProductsTypes = {
  init: '[Init Products]  fetch Products',
  success: '[Success Products]  fetch Products ',
  failure: '[Failure Products]  fetch Products ',
};
export const CitiesTypes = {
  init: '[Init Cities]  fetch Cities',
  success: '[Success Cities]  fetch Cities ',
  failure: '[Failure Cities]  fetch Cities ',
};

export const FetchSingleProductsBySearchTypes = {
  init: '[Init Products] fetch single product by Search ',
  success: '[Success Products]  fetch single product by Search ',
  failure: '[Failure Products]  fetch single product by Search ',
};

export const EditProductByAdminTypes = {
  init: '[Init Edit product] edit product by admin  ',
  success: '[Success Edit product]  edit product by admin  ',
  failure: '[Failure Edit product]  edit product by admin  ',
};
export const GetCartByIdTypes = {
  init: '[Init Cart] get cart by cart id',
  success: '[Success Cart] get cart by cart id ',
  failure: '[Failure Cart] get cart by cart id ',
};
export const getCartByCustomerIdTypes = {
  init: '[ init  cart by customer id]',
  success: '[ Success fetch cart by customer id]',
  failure: `[Fail fetch cart by customer  id ]`,
};
export const DeleteAllCartItemsTypes = {
  init: '[Init Cart] delete all cart items',
  success: '[Success Cart] delete all cart items',
  failure: '[Failure Cart] delete all cart items',
};
export const DeleteSingleItemInCartTypes = {
  init: '[Init delete single item in cart] ',
  success: '[Success delete single item in cart]',
  failure: '[Failure delete single item in cart] ',
};
export const AddProductToCartListTypes = {
  init: '[Init add product to cart list] ',
  success: '[Success add product to cart list]',
  failure: '[Failure add product to cart list]',
};
export const CreateNewCartTypes = {
  init: '[Init create cart] ',
  success: '[Success create cart] ',
  failure: '[Failure create cart] ',
};

export const GetUserDetailsShipmentsTypes = {
  init: '[Init user details shipments]',
  success: '[Success user details shipments]',
  failure: '[Failure user details shipments]',
};

export const CreateNewOrderTypes = {
  init: '[Init create order for customer]',
  success: '[Success create order for customer]',
  failure: '[Failure  create order for customer]',
};

export const AddNewProductByAdminTypes = {
  init: '[Init add new product by admin]',
  success: '[Success add new product by admin]',
  failure: '[Failure add new product by admin]',
};

export const LastOrderTypes = {
  init: '[Init last order type]',
  success: '[Success last order type]',
  failure: '[Failure last order type]',
};
export const DownloadRecipeTypes = {
  init: '[Init download recipe]',
  success: '[Success download recipe]',
  failure: '[Failure download recipe]',
};
export const FetchUnavailableDatesTypes = {
  init: '[Init fetch unavailable dates]',
  success: '[Success fetch unavailable dates]',
  failure: '[Failure fetch unavailable dates]',
};

export const UpdateItemQuantityInCart = {
  init: '[Init update item quantity in cart]',
  success: '[Success update item quantity in cart]',
  failure: '[Failure update item quantity in cart]',
};
function createActionTypes(nameAction: string) {
  return {
    init: `[Init  ${nameAction}]`,
    success: `[success  ${nameAction}]`,
    failure: `[failure  ${nameAction}]`,
  };
}

export const fetchAddressesTypes = createActionTypes('fetch addresses');
export const editAddressTypes = createActionTypes('edit address');
