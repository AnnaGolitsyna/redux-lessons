import React, { Component } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import {
  fetchCreateTask,
  fetchUpdateTask,
  fetchDeleteTask,
  fetchTasks,
} from '../tasks.gateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetchTasks().then((tasksList) => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreateTask = (text) => {
       const newTask = {
      text,
      done: false,
    };
    fetchCreateTask(newTask).then(() => this.fetchTasksList());
  };

  onUpdateTask = (id) => {

    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    fetchUpdateTask(updatedTask, id).then(() => this.fetchTasksList());
  };

  onDeleteTask = (id) => {

    fetchDeleteTask(id).then(() => this.fetchTasksList());
  };

  render() {
    const sortedList = [...this.state.tasks].sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTask onCreate={this.onCreateTask} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.onUpdateTask}
              onDelete={this.onDeleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
