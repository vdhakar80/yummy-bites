export interface LoginState {
  token: string;
  error: string;
}
export interface LoginCredentials {
  emailId: string;
  password: string;
}
export interface LoginAsyncAction {
  type: string;
  payload: LoginCredentials;
}
