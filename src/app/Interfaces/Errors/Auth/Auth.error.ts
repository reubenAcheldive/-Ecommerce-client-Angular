export type MessageError = {
  message: string;
  status: boolean;
};
export type emailOrPasswordIsMissing = {
  statusCode: number;
  message: string[];
  error: string;
};

export interface AuthErrorLogin {
  status: number;
  createBy: string;
  messageError: MessageError | emailOrPasswordIsMissing;
}
