import http from 'k6/http';
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


// export function handleSummary(data) {
//   const med_latency = data.metrics.iteration_duration.values.med;
//   const latency_message = `The median latency was ${med_latency}\n`;

//   return {
//     stdout: latency_message,
//   };
// }