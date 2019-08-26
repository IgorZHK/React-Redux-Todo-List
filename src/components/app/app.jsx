import React from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import PanelAddItem from '../panel-add-item/panel-add-item';

import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <SearchPanel />
        <TodoList />
        <PanelAddItem />
      </div>
    );
  }
}
