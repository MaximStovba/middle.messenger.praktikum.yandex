// base-api.ts
import { BaseModel } from './types';

export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export class BaseAPI {
  create(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  request(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  update(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }

  delete(_data?: BaseModel | unknown): Promise<XMLHttpRequest> {
    throw new Error('Not implemented');
  }
}
