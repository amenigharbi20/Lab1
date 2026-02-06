// Change setTimeout delay to 1000ms (1 second)
setTimeout(() => {
 console.log('This takes 1 second!');
}, 1000);
// Add more Promises
Promise.resolve()
 .then(() => console.log('Promise 1'))
 .then(() => console.log('Promise 2'))
 .then(() => console.log('Promise 3'));
