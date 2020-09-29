const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('tests that word hi returns after get request', async() => {
    const response = await request(app)
      .get('/');
    expect(response.text).toEqual('hi');
  });

});
