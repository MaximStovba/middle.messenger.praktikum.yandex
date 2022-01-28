// signup-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';
import { SignUpModel } from '../types';

const api = new HTTPTransport();

export class SignUpAPI extends BaseAPI {
  request(data: SignUpModel) {
    return api.post(BASE_URL + '/auth/signup', {
      data,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
