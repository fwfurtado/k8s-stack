import http from 'k6/http';
import exec from 'k6/execution';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};


export default function() {
  http.get('http://echoserver-service.echoserver.svc.cluster.local');
  sleep(1);
  console.log('Request sent');
}


export function handleSummary(data) {
  console.log('all env variables', JSON.stringify(__ENV));

  const med_latency = data.metrics.iteration_duration.values.med;
  const latency_message = `The median latency was ${med_latency}\n`;

  return {
    stdout: latency_message,
  };
}