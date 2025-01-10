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

  console.log(`Execution context

    Instance info
    -------------
    Vus active: ${exec.instance.vusActive}
    Iterations completed: ${exec.instance.iterationsCompleted}
    Iterations interrupted:  ${exec.instance.iterationsInterrupted}
    Iterations completed:  ${exec.instance.iterationsCompleted}
    Iterations active:  ${exec.instance.vusActive}
    Initialized vus:  ${exec.instance.vusInitialized}
    Time passed from start of run(ms):  ${exec.instance.currentTestRunDuration}
    
    Scenario info
    -------------
    Name of the running scenario: ${exec.scenario.name}
    Executor type: ${exec.scenario.executor}
    Scenario start timestamp: ${exec.scenario.startTime}
    Percenatage complete: ${exec.scenario.progress}
    Iteration in instance: ${exec.scenario.iterationInInstance}
    Iteration in test: ${exec.scenario.iterationInTest}
    
    Test info
    ---------
    All test options: ${exec.test.options}
    
    VU info
    -------
    Iteration id: ${exec.vu.iterationInInstance}
    Iteration in scenario: ${exec.vu.iterationInScenario}
    VU ID in instance: ${exec.vu.idInInstance}
    VU ID in test: ${exec.vu.idInTest}
    VU tags: ${exec.vu.tags}`);

  const med_latency = data.metrics.iteration_duration.values.med;
  const latency_message = `The median latency was ${med_latency}\n`;

  return {
    stdout: latency_message,
  };
}