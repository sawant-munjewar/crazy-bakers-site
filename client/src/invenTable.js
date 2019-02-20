import React, { Component } from 'react';
import './App.css';

class InvenTable extends Component {

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
                      <tr> <td>ID</td> <td>Name</td> <td>Inv_InDate</td><td>Inv_Info</td> </tr>
                           {this.state.items.map(item =>
                                <tr>
                                  <td>{item.Inv_id}</td>
                                  <td> {item.Inv_name}</td>
                                  <td>{item.Inv_InDate}</td>
                                  <td>{item.Inv_Info}</td>
                                </tr>
                           )}
                    </table>
             </div>
            );
          }
}
export default InvenTable;
