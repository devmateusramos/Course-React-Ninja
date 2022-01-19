import React from 'react';

const Title = ({ name, lastName }) => <h1>Olá {`${name} ${lastName}`}</h1>;

Title.defaultProps = {
  name: 'Qual seu nome? ',
  lastName: 'Qual seu sobrenome?',
};

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'desconhecido',
//       lastname: 'sem sobrenome',
//     };
//   },

//   render: function () {
//     return <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>;
//   },
// });

export default Title;
