import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'styles/markdown.scss';

const Indent = ({ children }) => <div className="indent">{children}</div>;

const Spacer = () => <div style={{ margin: '32px 0 32px 0' }} />;

const ListSpacer = () => <div style={{ margin: '16px 0 16px 0' }} />;

const WordSpan = ({ word, definition }) => {
  const tooltip = (
    <Tooltip id="tooltip" placement="auto">
      {definition}
    </Tooltip>
  );

  return (
    <OverlayTrigger overlay={tooltip}>
      <span style={{ color: 'red', cursor: 'pointer' }}>{word}</span>
    </OverlayTrigger>
  );
};

const DefinitionList = ({ json }) => (
  <div>
    <h1>Definitions</h1>
    <ul>
      {json.map((item) => (
        <li
          id={item.word.toLowerCase()}
          key={item.word.toLowerCase()}
          style={{ margin: '12px 0 12px' }}
        >
          {item.word} - {item.definition}
        </li>
      ))}
    </ul>
  </div>
);

export { Indent, Spacer, ListSpacer, WordSpan, DefinitionList };
