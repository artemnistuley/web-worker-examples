if (window.Worker) {
  const myWorker = new Worker('worker.js');
  myWorker.postMessage('');
} else {
  console.log('Worker is not supported');
}
