// api/signin-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { SignInModel } from '../types';

const api = new HTTPTransport();

export class SignInAPI extends BaseAPI {
  request(data: SignInModel) {
    return api.post(baseUrl + '/auth/signin', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
