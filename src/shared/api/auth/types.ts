export interface SignUpRequest {
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: string[];
  password: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarPath?: string;
  about?: string;
  phone?: string;
}

export interface SignResponseSuccess {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}

export interface SignResponseError {
  statusCode: number;
  message: string[];
  error: string;
}

export type SignResponse = SignResponseSuccess | SignResponseError;

export interface UserInfo {
  id: string;
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: string[];
  likes: string[];
  favoritesPost: string[];
}
