const asyncAdd = (a, b) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Argument must be numbers')
      }
    }, 1500);
  })
);

asyncAdd(5, 7).then((res) => {
   console.log(`Result: `, res);
}, (errorMessage) => {
  console.log(errorMessage);
})

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Hey. It worked!'), 2500);
// });
//
// somePromise.then(message => {
//   console.log(`Success: `, message);
// }, errorMessage => {
//   console.log(`Failed: `, errorMessage);
// });
