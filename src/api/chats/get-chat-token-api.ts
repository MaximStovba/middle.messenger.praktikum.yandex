// get-chat-token-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class GetChatTokenAPI extends BaseAPI {
  request(chatId: number) {
    return api.post(BASE_URL + `/chats/token/${chatId}`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
