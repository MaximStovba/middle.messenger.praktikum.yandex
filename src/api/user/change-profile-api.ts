// change-profile-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { ChangeProfileReq } from '../types';

const api = new HTTPTransport();

export class ChangeProfileAPI extends BaseAPI {
  update(user: ChangeProfileReq) {
    return api.put(baseUrl + '/user/profile', {
      data: user,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
