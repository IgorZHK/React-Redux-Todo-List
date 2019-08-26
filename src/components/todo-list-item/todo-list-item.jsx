import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
  id,
  text,
  isCompleted,
  important,
  toggleImportant,
  toggleCompleted,
  deleteTask
}) => {
  let classNames = 'todoListItemText mr-auto';
  if (isCompleted) classNames += ' isCompleted';
  if (important) classNames += ' important';

  return (
    <div className='todoListItem d-flex align-items-center'>
      <span className={classNames} onClick={() => toggleCompleted(id)}>
        {text}
      </span>
      <span
        className='btn btn-outline-success'
        onClick={() => toggleImportant(id)}
      >
        <i className='fa fa-exclamation-circle' aria-hidden='true' />
      </span>

      <span className='btn btn-outline-danger' onClick={() => deleteTask(id)}>
        <i className='fa fa-times-circle' aria-hidden='true' />
      </span>
    </div>
  );
};

export default TodoListItem;
