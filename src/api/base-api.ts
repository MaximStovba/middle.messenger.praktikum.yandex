// base-api.ts
import { BaseModel } from "./types";

export const baseUrl = "https://ya-praktikum.tech/api/v2";

export class BaseAPI {
  create(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error("Not implemented");
  }

  request(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error("Not implemented");
  }

  update(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error("Not implemented");
  }

  delete(): Promise<XMLHttpRequest> {
    throw new Error("Not implemented");
  }
}
