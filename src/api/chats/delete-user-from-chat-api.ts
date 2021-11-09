// delete-user-from-chat-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { DeleteUsersFromChatReq } from '../types';

const api = new HTTPTransport();

export class DeleteUserFromChatAPI extends BaseAPI {
  update(data: DeleteUsersFromChatReq) {
    return api.delete(baseUrl + '/chats/users', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
