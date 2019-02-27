import React, { Component } from 'react';
import './App.css';

class GetInventoryTable extends Component {

  constructor(props) {
    super(props);
    this.state =  { items: [],
                    ditems: []
                  };
    this.getPasswords = this.getPasswords.bind(this);
    this.setCurrentState = this.setCurrentState.bind(this)
  }

  componentDidMount(){
    this.getPasswords();
  }

  setCurrentState = (item) => {
    this.setState({ items: item })
  }

 getPasswords() {
    fetch('/server').then( response => response.json()
  ).then( item => this.setCurrentState(item))
  }

  render() {
      return(
             <div>
                    <table border='1'>
                      <tr> <td>ID</td> <td>Name</td> <td>InDate</td><td>Info</td> </tr>
                           {this.state.items.map(item =>
                                <tr>
                                  <td>{item.id}</td>
                                  <td> {item.name}</td>
                                  <td>{item.InDate}</td>
                                  <td>{item.Info}</td>
                                </tr>
                           )}
                    </table>
             </div>
            );
          }
}
export default GetInventoryTable;
