import * as sinon from 'sinon';
import { expect } from 'chai';
import { SignInAPI } from './signin-api';

describe('SignInAPI', () => {
  const req: sinon.SinonFakeXMLHttpRequest[] = [];

  beforeEach(function () {
    let xhr: sinon.SinonFakeXMLHttpRequestStatic;
    (global as any).XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    xhr.onCreate = (request: sinon.SinonFakeXMLHttpRequest) => {
      req.push(request);
    };
  });

  afterEach(function () {
    (global as any).XMLHttpRequest.restore();
    req.length = 0;
  });

  it('sends POST to /auth/signin', () => {
    const api = new SignInAPI();
    const data = {
      login: 'login',
      password: 'Pwd12345',
    };

    api.request(data);

    expect(req.length).to.eq(1);
    expect(req[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signin');
    expect(req[0].method).to.eq('POST');
    expect(req[0].requestBody).to.eq(JSON.stringify(data));
  });
});
