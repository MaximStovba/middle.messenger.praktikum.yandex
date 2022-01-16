// get-chats-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';

const api = new HTTPTransport();

export class GetChatsAPI extends BaseAPI {
  request() {
    return api.get(baseUrl + '/chats', {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
