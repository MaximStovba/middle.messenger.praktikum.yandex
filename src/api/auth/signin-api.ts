// api/signin-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';
import { SignInModel } from '../types';

const api = new HTTPTransport();

export class SignInAPI extends BaseAPI {
  request(data: SignInModel) {
    return api.post(BASE_URL + '/auth/signin', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
