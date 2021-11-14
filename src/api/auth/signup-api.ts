// signup-api.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";
import { SignUpModel } from "../types";

const api = new HTTPTransport();

export class SignUpAPI extends BaseAPI {
  request(data: SignUpModel) {
    return api.post(baseUrl + "/auth/signup", {
      data,
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
