// controllers/chats.ts

import { GetChatsAPI } from '../api/chats/get-chats-api';
import { CreateChatAPI } from '../api/chats/create-chat-api';
import { DeleteChatAPI } from '../api/chats/delete-chat-api';
import { AddUserToChatAPI } from '../api/chats/add-user-to-chat-api';
import { DeleteUserFromChatAPI } from '../api/chats/delete-user-from-chat-api';
import { GetChatsUsersAPI } from '../api/chats/get-chats-users-api';
import { GetChatTokenAPI } from '../api/chats/get-chat-token-api';
import { formValidation } from '../utils/validator';
import { Store } from '../utils/store';

const store = new Store();
const getChatsApi = new GetChatsAPI();
const createChatApi = new CreateChatAPI();
const deleteChatApi = new DeleteChatAPI();
const addUserToChatApi = new AddUserToChatAPI();
const deleteUserFromChatApi = new DeleteUserFromChatAPI();
const getChatsUsersApi = new GetChatsUsersAPI();
const getChatTokenApi = new GetChatTokenAPI();

export class ChatsController {
  public async getChats() {
    try {
      getChatsApi
        .request()
        .then((res) => {
          if (res.status === 200) {
            const chats = JSON.parse(res.response);
            store.setState({ chats });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async createChat(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const title = validateData.inputsValue.title;

      createChatApi
        .create({ title })
        .then((res) => {
          if (res.status === 200) {
            const chat = JSON.parse(res.response);
            console.log(chat);
            this.getChats();
            store.setState({ currentChat: chat.id });
            this.getChatsUsers(chat.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteChat(chatId: number) {
    try {
      deleteChatApi
        .delete({ chatId })
        .then((res) => {
          if (res.status === 200) {
            const response = JSON.parse(res.response);
            console.log(response.result.id);
            this.getChats();
            store.setState({ currentChat: null, currentChatUsers: [], token: null });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async addUserToChat(users: number[], chatId: number) {
    try {
      addUserToChatApi
        .update({ users, chatId })
        .then((res) => {
          if (res.status === 200) {
            this.getChatsUsers(chatId);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteUserFromChat(users: number[], chatId: number) {
    try {
      deleteUserFromChatApi
        .update({ users, chatId })
        .then((res) => {
          if (res.status === 200) {
            this.getChatsUsers(chatId);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async getChatsUsers(chatId: number) {
    try {
      getChatsUsersApi
        .request(chatId)
        .then((res) => {
          if (res.status === 200) {
            const currentChatUsers = JSON.parse(res.response);
            store.setState({ currentChatUsers });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async getChatToken(chatId: number) {
    try {
      getChatTokenApi
        .request(chatId)
        .then((res) => {
          if (res.status === 200) {
            const response = JSON.parse(res.response);
            console.log(`Токен чата ${chatId} - ${response.token}`);
            store.setState({ token: response.token});
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
