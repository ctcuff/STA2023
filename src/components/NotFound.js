import React, { Component } from 'react';
import '../style/NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
        <div className="NotFound-center">
          <p>You're lost. <a href="/">Go home</a>.</p>
        </div>
    );
  }
}