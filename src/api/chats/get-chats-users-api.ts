// get-chats-users-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class GetChatsUsersAPI extends BaseAPI {
  request(chatId: number) {
    return api.get(BASE_URL + `/chats/${chatId}/users`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
