type emailOrPasswordIsMissing = {
  message: string[] | string;
};

interface Error {
  status: number;
  createBy: string;
  messageError: emailOrPasswordIsMissing;
}
export interface AuthErrorLogin {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: Error;
}
