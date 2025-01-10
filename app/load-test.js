import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};


export default function() {
  http.get('http://echoserver.echoserver.svc.cluster.local');
  sleep(1);
  console.log('Request sent');
}


export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data), //the default data object
  };
}