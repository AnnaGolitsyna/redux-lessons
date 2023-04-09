import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import { toggleOptions } from './options.actions';
import { useSelector } from 'react-redux';
import Options from './Options';

// const SelectedOptions = ({title}) => {
//     const {selected } = useSelector(
//       ({ optionsData }) => optionsData
//     );
//     console.log(selected);
//    return <Options title={title} options={selected} />;
// }

const mapState = (state) => {
  return {
    optionsData: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOptions,
};

export default connect(mapState, mapDispatch)(Options);
