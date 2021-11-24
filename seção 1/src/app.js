'use strict';
import React, { Component } from 'react';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className='container'>
        {['blue', 'black', 'black'].map((square, index) => (
          <Square color={square} key={index} />
        ))}
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
