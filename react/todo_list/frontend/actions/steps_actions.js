export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveTodos = todos => {
  return {
    type: RECEIVE_STEPS,
    todos: todos
  };
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_STEP,
    todo: todo
  };
};

export const removeTodo = todo => {
  return {
    type: REMOVE_STEP,
    todo: todo
  };
};
