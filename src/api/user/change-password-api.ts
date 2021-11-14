// change-password-api.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";
import { ChangePasswordModel } from "../types";

const api = new HTTPTransport();

export class ChangePasswordAPI extends BaseAPI {
  update(user: ChangePasswordModel) {
    return api.put(baseUrl + "/user/password", {
      data: user,
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
