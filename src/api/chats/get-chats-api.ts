// get-chats-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class GetChatsAPI extends BaseAPI {
  request() {
    return api.get(BASE_URL + '/chats', {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
