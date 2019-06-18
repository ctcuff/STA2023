import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function WordSpan(props) {
  const tooltip = (
    <Tooltip id="tooltip" placement="auto">
      {props.definition}
    </Tooltip>
  );
  return (
    <OverlayTrigger overlay={tooltip}>
      <span style={{ color: "red", cursor: 'pointer' }}>
        {props.word}
      </span>
    </OverlayTrigger>
  );
}