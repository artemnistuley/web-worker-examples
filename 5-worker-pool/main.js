const workers = [];

for (let i = 0; i < navigator.hardwareConcurrency; i++) {
  const newWorker = {
    worker: new Worker('cpu-worker.js'),
    inUse: false,
  }
  workers.push(newWorker);
}

console.log({ workers });
