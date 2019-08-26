import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleImportant, toggleCompleted, deleteTask } from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

class TodoList extends Component {
  filterTask = (tasks, filter) => {
    switch (filter) {
      case 'Active':
        return tasks.filter(item => item.isCompleted === false);

      case 'Complete':
        return tasks.filter(item => item.isCompleted === true);

      default:
        return tasks;
    }
  };

  search = (tasks, searchText) => {
    if (searchText.length === 0) return tasks;

    return tasks.filter(item => {
      return item.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  };

  render() {
    const {
      tasks,
      toggleImportant,
      toggleCompleted,
      deleteTask,
      filter,
      searchText
    } = this.props;

    const searchedTasks = this.search(tasks, searchText);

    const tasksList = this.filterTask(searchedTasks, filter).map(item => {
      const { id, text, isCompleted, important } = item;

      return (
        <li key={id} className='list-group-item'>
          <TodoListItem
            id={id}
            text={text}
            isCompleted={isCompleted}
            important={important}
            toggleImportant={toggleImportant}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        </li>
      );
    });

    return <ul className='todoList list-group'>{tasksList}</ul>;
  }
}

export default connect(
  state => ({
    tasks: state.tasks,
    filter: state.filters.filter,
    searchText: state.search.searchText
  }),
  { toggleImportant, toggleCompleted, deleteTask }
)(TodoList);
