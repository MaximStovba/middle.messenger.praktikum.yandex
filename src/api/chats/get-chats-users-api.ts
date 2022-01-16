// get-chats-users-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';

const api = new HTTPTransport();

export class GetChatsUsersAPI extends BaseAPI {
  request(chatId: number) {
    return api.get(baseUrl + `/chats/${chatId}/users`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
