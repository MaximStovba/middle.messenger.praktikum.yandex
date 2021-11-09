// add-user-to-chat-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { AddUsersToChatReq } from '../types';

const api = new HTTPTransport();

export class AddUserToChatAPI extends BaseAPI {
  update(data: AddUsersToChatReq) {
    return api.put(baseUrl + '/chats/users', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
