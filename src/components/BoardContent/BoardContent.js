import React from 'react';
import './BoardContent.scss';
import Column from '../Column/Column';
export default function BoardContent() {
  return (
    <>
      <div className="board-columns">
        <Column />
      </div>
    </>
  );
}
