export const DECREMENT = 'PAGE/DECREMENT';
export const INCREMENT = 'PAGE/INCREMENT';

export const decrement = () => {
  return {
    type: DECREMENT,

  };
};


export const increment = () => {
  return {
    type: INCREMENT,
  };
};