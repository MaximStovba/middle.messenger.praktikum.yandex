// find-user.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";
import { FindUserModel } from "../types";

const api = new HTTPTransport();

export class FindUserAPI extends BaseAPI {
  request(data: FindUserModel) {
    return api.post(baseUrl + "/user/search", {
      data,
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
