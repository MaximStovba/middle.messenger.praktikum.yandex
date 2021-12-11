export interface BaseModel {
  [key: string]: any;
}

export interface SignInModel {
  login: string;
  password: string;
}

export interface SignUpModel {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ChangeProfileModel {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface ChangePasswordModel {
  oldPassword: string;
  newPassword: string;
}

export interface CreateChatModel {
  title: string;
}

export interface DeleteChatModel {
  chatId: number;
}

export interface AddUsersToChatModel {
  users: number[];
  chatId: number;
}

export interface DeleteUsersFromChatModel {
  users: number[];
  chatId: number;
}

export interface FindUserModel {
  login: string;
}
