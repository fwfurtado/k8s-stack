import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { target: 200, duration: '30s' },
    { target: 0, duration: '30s' },
  ],
};

export default function () {
  const result = http.get('http://echoserver-service.echoserver.svc.cluster.local');
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}