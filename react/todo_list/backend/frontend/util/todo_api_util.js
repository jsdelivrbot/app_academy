// Write a function that takes no arguments, makes a request to api/todos with a method of GET, and returns a promise.
// Test your code - Try running your function in the console and make sure you can resolve the promise by passing a function to then.

() => {
  return $.ajax({
    method: 'GET',
    url: 'api/todos'
  });
};
