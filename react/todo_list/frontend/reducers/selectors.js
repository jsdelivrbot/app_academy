export const allTodos = ({ todos }) => {
  let todosArr = [];
  let todoIds = Object.keys(todos);

  todoIds.forEach( id => {
    todosArr.push(todos[id]);
  });

  return todosArr;
};
