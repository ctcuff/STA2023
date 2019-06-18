import React from 'react';
import '../style/Chapter.scss';

export default function Definitions(props) {
  return (
      <div>
        <h1 id="definitions">Definitions</h1>
        <ul className="ul-indent-level-1" id="definition-list">
          {props.json.map(item =>
              <li id={item.word.toLowerCase()} key={item.word.toLowerCase()}>
                {item.word} - {item.definition}
              </li>
          )}
        </ul>
      </div>
  );
}