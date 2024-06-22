import React from 'react';

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
          onClick={() => {
            props.onToggle(props.id);
          }}
        />
        <li className={props.item.completed ? 'completed' : ''}>
          {props.item.text}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
