import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Options from './Options';
import { toggleOptions } from './options.actions';
import { availableOptionsSelector } from './options.selectors';

// const AvailableOptions = ({ title }) => {
//   const { optionsList } = useSelector(({ optionsData }) => optionsData);
//   console.log(optionsList);
//   return <Options title={title} options={optionsList} />;
// };

const mapState = (state) => {
  return {
    optionsData: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOptions,
};

export default connect(mapState, mapDispatch)(Options);
