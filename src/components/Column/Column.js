import React from 'react';
import './Column.scss';
import Task from '../Task/Task';
export default function Column() {
  return (
    <>
      <div className="column">
        <header>Brainstorm</header>
        <ul className="task-list">
          <Task />

          {/* <li className="task-item">second</li>
          <li className="task-item">third</li>
          <li className="task-item">second</li>
          <li className="task-item">third</li>
          <li className="task-item">second</li>
          <li className="task-item">third</li>
          <li className="task-item">third</li>
          <li className="task-item">second</li>
          <li className="task-item">third</li> */}
        </ul>
        <footer>Add another card</footer>
      </div>
    </>
  );
}
