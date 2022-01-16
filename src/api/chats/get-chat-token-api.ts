// get-chat-token-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';

const api = new HTTPTransport();

export class GetChatTokenAPI extends BaseAPI {
  request(chatId: number) {
    return api.post(baseUrl + `/chats/token/${chatId}`, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
