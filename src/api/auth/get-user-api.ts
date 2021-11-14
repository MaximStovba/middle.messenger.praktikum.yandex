// get-user-api.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";

const api = new HTTPTransport();

export class GetUserAPI extends BaseAPI {
  request() {
    return api.get(baseUrl + "/auth/user");
  }
}
