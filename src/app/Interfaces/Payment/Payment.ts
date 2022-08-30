export interface IPayment {
  _id?: string;
  cartRef: string;
  customerRef: string;
  cardNumber: string;
  cvc: string;
  expiredDate: string;
  name: string;

}
