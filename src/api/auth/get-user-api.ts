// get-user-api.ts
import { HTTPTransport } from '../../utils/http';
import { BaseAPI, BASE_URL } from '../base-api';

const api = new HTTPTransport();

export class GetUserAPI extends BaseAPI {
  request() {
    return api.get(BASE_URL + '/auth/user');
  }
}
