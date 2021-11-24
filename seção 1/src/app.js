'use strict';
import React, { Component } from 'react';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div
        className='container'
        onClick={(e) => {
          alert('clicou');
        }}
      >
        <Square />
      </div>
    );
  }
}

// var App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Mateus' />
//       </div>
//     );
//   },
// });

export default App;
