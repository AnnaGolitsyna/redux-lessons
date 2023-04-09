export const TOGGLE = 'OPTIONS_TOGGLE';

export const toggleOptions = (optionId) => {
  return {
    type: TOGGLE,
    payload: { optionId },
  };
};