const numberA = 2;

if (window.SharedWorker) {
  const worker = new SharedWorker('worker.js');
  worker.port.start();

  worker.port.postMessage([numberA, numberA]);
  console.log('Message posted to worker');

  worker.port.addEventListener('message', (event) => {
    console.log('Message received from worker');
    const { data } = event;
    console.log({ event, data });
  });

} else {
  console.log('SharedWorker is not supported');
}
