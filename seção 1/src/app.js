'use strict';
import React from 'react';
import Title from './title';

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Mateus Ramos' />
        <label htmlFor='input' data-label='Label'>
          Input
        </label>
        <input type='text' id='input' aria-hidden={true}></input>
      </div>
    );
  },
});

export default App;
