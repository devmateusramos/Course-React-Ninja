'use strict';

import React, { Component } from 'react';

class Plugin extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicou no botão', this.myInput);
    // Essa ref é a referência pro elemento no DOM mesmo e não do
    // DOM como algo feito pelo React como quando utilizo eventos
    // pelo React
    this.myInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={(node) => {
            console.log(node);
            this.myInput = node;
          }}
        />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

export default Plugin;
