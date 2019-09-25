export const increment = () => {
  return {
    type: "INCREMENT",
    payload: "hello"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    payload: "world"
  };
};
