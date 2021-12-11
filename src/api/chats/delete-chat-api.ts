// delete-chat-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { DeleteChatModel } from '../types';

const api = new HTTPTransport();

export class DeleteChatAPI extends BaseAPI {
  delete(data: DeleteChatModel) {
    return api.delete(baseUrl + '/chats', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
