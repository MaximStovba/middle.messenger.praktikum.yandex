// change-avatar-api.ts

import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class ChangeAvatarAPI extends BaseAPI {
  update(data: FormData) {
    return api.put(BASE_URL + '/user/profile/avatar', {
      data,
      isFormData: true,
    });
  }
}
