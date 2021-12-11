// controllers/chats.ts

import { GetChatsAPI } from '../api/chats/get-chats-api';
import { CreateChatAPI } from '../api/chats/create-chat-api';
import { DeleteChatAPI } from '../api/chats/delete-chat-api';
import { AddUserToChatAPI } from '../api/chats/add-user-to-chat-api';
import { DeleteUserFromChatAPI } from '../api/chats/delete-user-from-chat-api';
import { formValidation } from '../utils/validator';
import { Store } from '../utils/store';

const store = new Store();
const getChatsApi = new GetChatsAPI();
const createChatApi = new CreateChatAPI();
const deleteChatApi = new DeleteChatAPI();
const addUserToChatApi = new AddUserToChatAPI();
const deleteUserFromChatApi = new DeleteUserFromChatAPI();

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
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async addUserToChat(event: Event) {
    try {
      const users = [0];
      const chatId = 0;

      addUserToChatApi
        .update({ users, chatId })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteUserFromChat(event: Event) {
    try {
      const users = [0];
      const chatId = 0;

      deleteUserFromChatApi
        .update({ users, chatId })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
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
