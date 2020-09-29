const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('tests that word hi returns after get request', async() => {
    const response = await request(app)
      .get('/');
    expect(response.text).toEqual('hi');
  });

  it('returns plain text with post to echo', async() => {
    const response = await request(app)
      .post('/echo')
      .send('This is the echo');
    
   
    expect(response.text).toEqual('This is the echo');
  });

  it('returns red h1', async() => {
    const response = await request(app)
      .get('/red');
    expect(response.text).toEqual('<h1>red</h1>');
  });

});
