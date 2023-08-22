import app from '@/app';
import request from 'supertest';

describe('GET /api/v1/health', () => {
  it('should return 200 OK', () => {
    return request(app).get('/api/v1/health').expect(200);
  });
});
