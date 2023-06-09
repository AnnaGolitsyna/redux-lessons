import { TOGGLE } from './options.actions';
import { options } from './optionsData';

const initialState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: {
      const { optionId } = action.payload;
      const newSelectedIds = state.selected.includes(optionId)
        ? state.selected.filter((id) => id !== optionId)
        : state.selected.concat(optionId);
      return {
        ...state,
        selected: newSelectedIds,
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;
