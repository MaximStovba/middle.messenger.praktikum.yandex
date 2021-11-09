// signin-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { SignInReq } from '../types';

const api = new HTTPTransport();

export class SignInAPI extends BaseAPI {
  request(user: SignInReq) {
    return api.post(baseUrl + '/auth/signin', {
      data: user,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
