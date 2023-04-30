self.addEventListener('connect', (event) => {
  const [port] = event.ports;
  port.start();

  port.addEventListener('message', (event) => {
    const { data } = event;
    const [numberA, numberB] = data;
    const result = numberA * numberB;
    port.postMessage(result);
  });
});
