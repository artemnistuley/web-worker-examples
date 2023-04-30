
self.addEventListener('message', (event) => {
  console.log('Hey there from worker');

  const { data } = event;
  console.log({ event, data });

  const [numberA, numberB] = data;
  const result = numberA * numberB;

  // throw new Error('Error in worker');

  console.log('Posting message back to main script');
  self.postMessage(result);
});
