import React, { Component } from 'react';
import Menu from './MenuTable.js';
import Inven from './invenTable.js';
import './App.css';


class App extends Component {

  render() {
    return (
            <div>
             <Inven />
             <Menu />
            </div>
          );
  }
}
export default App;
