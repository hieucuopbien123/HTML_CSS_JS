// # Dùng sass trong React

import React, { Component } from 'react';
import Menu from './Menu';

const MENUS= [
  { text: 'Website', url: 'http://thebaodev.me' },
  { text: 'Blog', url: 'http://blog.thebaodev.me' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Menu menus={MENUS} />
      </div>
    );
  }
}
export default App;
