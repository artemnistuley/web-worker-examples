const numberA = 1;
const numberB = 2;

if (window.Worker) {
  const myWorker = new Worker('worker.js');

  myWorker.addEventListener('message', (event) => {
    console.log('Got a message from worker');

    const { data } = event;
    console.log({ event, data });
  });

  myWorker.addEventListener('error', (error) => {
    console.log({ error });
  });

  console.log('Post a message to worker');
  myWorker.postMessage([numberA, numberB]);

  // myWorker.terminate();
} else {
  console.log('Worker is not supported');
}
