import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../actions';

import './panel-add-item.css';

const PanelAddItem = props => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.addEventListener('keypress', handleAddTask);
    return () => {
      document.removeEventListener('keypress', handleAddTask);
    };
  });

  const handleAddTask = e => {
    if (
      ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') &&
      inputText.length > 1
    ) {
      props.addTask(inputText);
      setInputText('');
    }
  };

  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control'
        placeholder='New task'
        onChange={({ target: { value } }) => setInputText(value)}
        value={inputText}
      />
      <div className='input-group-append'>
        <input
          type='button'
          className='btn btn-info'
          value='Add'
          onClick={handleAddTask}
        />
      </div>
    </div>
  );
};

export default connect(
  null,
  { addTask }
)(PanelAddItem);
