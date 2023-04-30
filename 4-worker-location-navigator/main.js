if (window.Worker) {
  const myWorker = new Worker('worker.js?q=query_value#hashValue');
  myWorker.postMessage('');
} else {
  console.log('Worker is not supported');
}
