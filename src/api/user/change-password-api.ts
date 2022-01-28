// change-password-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';
import { ChangePasswordModel } from '../types';

const api = new HTTPTransport();

export class ChangePasswordAPI extends BaseAPI {
  update(user: ChangePasswordModel) {
    return api.put(BASE_URL + '/user/password', {
      data: user,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
