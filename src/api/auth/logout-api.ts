// logout-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, baseUrl } from '../base-api';

const api = new HTTPTransport();

export class LogoutAPI extends BaseAPI {
  request() {
    return api.post(baseUrl + '/auth/logout');
  }
}
