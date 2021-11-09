export interface BaseReq {
  [key: string]: any;
}

export interface SignInReq {
  login: string;
  password: string;
}

export interface SignUpReq {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ChangeProfileReq {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface ChangePasswordReq {
  oldPassword: string;
  newPassword: string;
}

export interface CreateChatReq {
  title: string;
}

export interface AddUsersToChatReq {
  users: number[];
  chatId: number;
}

export interface DeleteUsersFromChatReq {
  users: number[];
  chatId: number;
}
