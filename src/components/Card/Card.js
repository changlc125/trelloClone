import React from 'react';
import './Card.scss';
export default function Card(props) {
  const { card } = props;
  return (
    <>
      <div className="card-item">
        {card.image && (
          <img
            alt="no pic"
            className="card-cover"
            src={card.image}
            onMouseDown={(event) => event.preventDefault()}
          />
        )}
        {card.title}
      </div>
    </>
  );
}
