export interface IUserInformation {
  jwt: string;
  email: string;
  isAdmin: boolean;
  success?: string;
  userId: string;
  firstName: string;
  lastName: string;
  message?: string;
  status?: boolean;
}
export interface IRegistration {
  id: string;
  email: string;
  password: string;
}
