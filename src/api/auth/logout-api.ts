// logout-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class LogoutAPI extends BaseAPI {
  request() {
    return api.post(BASE_URL + '/auth/logout');
  }
}
