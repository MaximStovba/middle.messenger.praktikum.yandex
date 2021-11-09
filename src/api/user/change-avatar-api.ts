// change-avatar-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';

const api = new HTTPTransport();

export class ChangeAvatarAPI extends BaseAPI {
  update(data: FormData) {
    return api.put(baseUrl + '/user/profile/avatar', {
      data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  }
}
