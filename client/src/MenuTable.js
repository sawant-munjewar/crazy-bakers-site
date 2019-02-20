import React, { Component } from 'react';
import './App.css';

var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class MenuTable extends Component {

  // Initialize state
  constructor(props) {
    super(props);
    this.state =  { items: [] };
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
    fetch('/menuserver').then( response => response.json()
  ).then( item => this.setCurrentState(item))
  }
  render() {
    return(
     <div>

          <BootstrapTable bordered={ true } data={ this.state.items } striped hover condensed options={ { noDataText: 'This is custom text for empty data' } }>
             <TableHeaderColumn width='150' dataField='Menu_id' isKey> ID</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_name'>Menu Name</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_Category'>Menu Category</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_SubCategory' >Menu SubCategory</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_Price'>Menu Price</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_IsAvailable'>Menu IsAvailable</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_QuantityInKg'>Menu QuantityInKg</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_QuantityInNumber'>Menu QuantityInNumber</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_Info'>Menu Info</TableHeaderColumn>
             <TableHeaderColumn width='150' dataField='Menu_InDate'>Menu InDate</TableHeaderColumn>
          </BootstrapTable>


     </div>

    );
  }
}
export default MenuTable;
