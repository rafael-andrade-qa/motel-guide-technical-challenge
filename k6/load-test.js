import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 20 },
    { duration: '3m', target: 100 },
    { duration: '1m', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://localhost:3001/users');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is below 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
