import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // Virtual Users
  duration: '30s', // Test runs for 30 seconds
};

export default function () {
  const res = http.get('https://danielcristho.site');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // wait 1 second between each request
}
