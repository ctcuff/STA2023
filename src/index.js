import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import './style/index.scss';

function Wrapper() {
  return (
    <div className="index-container">
      <AppRouter/>
    </div>
  );
}

ReactDOM.render(<Wrapper/>, document.getElementById('root'));