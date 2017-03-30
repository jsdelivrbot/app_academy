export const allTodos = ({ todos }) => {
  let todosArr = [];
  let todoIds = Object.keys(todos);

  todoIds.forEach( id => {
    todosArr.push(todos[id]);
  });

  return todosArr;
};

export const allSteps = ({ steps }) => {
  let stepsArr = [];
  let stepIds = Object.keys(steps);

  stepIds.forEach( id => {
    stepsArr.push(steps[id]);
  });

  return stepsArr;
};
