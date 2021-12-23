import { expect } from 'chai';

import { hello } from './hello';

describe('Test Hello World', () => {
  it('should return string correctly', () => {
    expect(hello('mocha'), 'Hello mocha');
  });
});
