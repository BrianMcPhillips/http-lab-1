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
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });
  
  it('returns green h1', async() => {
    const response = await request(app)
      .get('/green');
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('returns blue h1', async() => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });
});
