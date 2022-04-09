import React from 'react';
import './BoardContent.scss';
import Column from '../Column/Column';
import { initData } from '../../actions/initData';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { mapOrder } from '../../utilites/sorts';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utilites/dragDrop';
export default function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // 初始状态的时候，执行该函数。只有有border的数据就设置board和column
    const boardInitData = initData.boards.find((item) => item.id === 'board-1');
    if (boardInitData) {
      setBoard(boardInitData);
      //   sort columns
      setColumns(
        mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id')
      );
    }
  }, []);

  //保证拖动完能固定在拖完的位置
  const onColumnDrop = (dropResult) => {
    // console.log('inside are dropResult', dropResult);
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);
    // console.log('inside are newColumns', newColumns);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    setColumns(newColumns);
    setBoard(newBoard);
  };

  const onCardDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log('inside is column', dropResult, 'wirh columnId = ', columnId);

      let newColumns = [...columns];
      let currentColumn = newColumns.find((column) => column.id === columnId);

      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((card) => card.id);
      // console.log('inside is currentColumn', currentColumn);
      setColumns(newColumns);
    }
  };

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board not found</div>
      </>
    );
  }

  return (
    <>
      <div className="board-columns">
        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={(index) => columns[index]}
          // dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'column-drop-preview',
          }}
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column, index) => {
              return (
                <Draggable key={column.id}>
                  <Column column={column} onCardDrop={onCardDrop} />
                </Draggable>
              );
            })}

          <div className="add-new-column">
            <i className="fa fa-plus icon"></i>Add another column
          </div>
        </Container>
      </div>
    </>
  );
}
