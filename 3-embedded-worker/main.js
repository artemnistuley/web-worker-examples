function funcToWorkerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

function workerFunc() {
  const value = 'Hello world!';
  
  self.addEventListener('message', (event) => {
    console.log('Hi there from worker!');
    postMessage(value);
  });
}

document.myWorker = new Worker(funcToWorkerURL(workerFunc));

document.myWorker.addEventListener('message', (event) => {
  console.log('Message received from worker');
  const { data } = event;
  console.log({ event, data });
});

document.myWorker.postMessage('');
