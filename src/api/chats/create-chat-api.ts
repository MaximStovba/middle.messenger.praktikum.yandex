// create-chat-api.ts
import { HTTPTransport } from "../../utils/http";
import { BaseAPI, baseUrl } from "../base-api";
import { CreateChatModel } from "../types";

const api = new HTTPTransport();

export class CreateChatAPI extends BaseAPI {
  create(data: CreateChatModel) {
    return api.post(baseUrl + "/chats", {
      data,
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
