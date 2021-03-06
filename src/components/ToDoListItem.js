import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const item = this.props.items;

    return (
      <div className='ToDoListItem'>
        <div className='ToDoListItem-title'>{item.title}</div>
        <div className='ToDoListItem-description'>{item.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;
