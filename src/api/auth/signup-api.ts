// signup-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';
import { SignUpReq } from '../types';

const api = new HTTPTransport();

export class SignUpAPI extends BaseAPI {
  request(user: SignUpReq) {
    return api.post(baseUrl + '/auth/signup', {
      data: user,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
