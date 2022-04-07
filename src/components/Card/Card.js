import React from 'react';
import './Card.scss';
export default function Card(props) {
  const { card } = props;
  return (
    <>
      <li className="card-item">
        {card.image && (
          <img alt="no pic" className="card-cover" src={card.image} />
        )}
        {card.title}
      </li>
    </>
  );
}
