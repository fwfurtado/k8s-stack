import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '3m',
};


export default function() {
  http.get('http://localhost:8080');
  sleep(1);
}


export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data), //the default data object
  };
}