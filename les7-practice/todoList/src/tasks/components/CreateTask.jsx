import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTask extends Component {
  state = {
    textInput: '',
  };
  handleChangeTextInput = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  hendleCreateTask = () => {
    this.props.onCreate(this.state.textInput);
    this.setState({ textInput: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.textInput}
          onChange={this.handleChangeTextInput}
        />
        <button
          className="btn create-task__btn"
          onClick={this.hendleCreateTask}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTask;
