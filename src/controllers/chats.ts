// controllers/chats.ts

import { CreateChatAPI } from '../api/chats/create-chat-api';
import { AddUserToChatAPI } from '../api/chats/add-user-to-chat-api';
import { DeleteUserFromChatAPI } from '../api/chats/delete-user-from-chat-api';
import { formValidation } from '../utils/validator';

const createChatApi = new CreateChatAPI();
const addUserToChatApi = new AddUserToChatAPI();
const deleteUserFromChatApi = new DeleteUserFromChatAPI();

export class ChatsController {
  public async createChat(event: Event) {
    try {
      const validateData = formValidation(event);

      if (!validateData.isFormValid) {
        throw new Error('Ошибка валидации');
      }

      const title = '';
      createChatApi
        .create({ title })
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