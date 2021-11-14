// change-profile-api.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";
import { ChangeProfileModel } from "../types";

const api = new HTTPTransport();

export class ChangeProfileAPI extends BaseAPI {
  update(data: ChangeProfileModel) {
    return api.put(baseUrl + "/user/profile", {
      data,
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
