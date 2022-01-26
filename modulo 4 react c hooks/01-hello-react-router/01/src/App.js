import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/blog' component={Blog} />

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sobre'>Sobre</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}
const Home = () => <h1>Home</h1>;
const Sobre = () => <h1>Sobre</h1>;
const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      <li>
        <Link to='/blog/post-1'>Post 1</Link>
      </li>
      <li>
        <Link to='/blog/post-2'>Post 2</Link>
      </li>
    </ul>

    <Route path='/blog/:post' component={Post} />
    <Route exact path='/blog' component={NoPost} />
  </div>
);

const Post = ({ match }) => {
  return <h2>{match.params.post}</h2>;
};

const NoPost = () => {
  return <h2>Selecione um post</h2>;
};

export default App;
