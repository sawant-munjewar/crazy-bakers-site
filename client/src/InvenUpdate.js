import React, { Component } from 'react';
import {  Button,Table, Form, FormGroup} from 'reactstrap';
import {RadioGroup, Radio} from 'react-radio-group';
import SearchBar from './search.js';

export default class InvenUpdate extends Component {

  constructor(props) {
      super(props);
      this.state =  { items: [],
                      selectedOption: "default",
                       filterText: ""
                    }
      this.setCurrentState = this.setCurrentState.bind(this);
      this.getData = this.getData.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submitClicked = this.submitClicked.bind(this);
    }

    componentDidMount(){
      this.getData();
    }
    setCurrentState = (item) => {
      this.setState({ items: item })
    }
    getData() {
      fetch('/server').then( response => response.json()
    ).then( item => this.setCurrentState(item))
    }

    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };

    handleChange(event) {
      if(event.target.checked){
        console.log(event.target.value);
            this.setState({
              selectedOption: event.target.value
            });
          }
      }


submitClicked(){

}

  render(){
    return(
      <Form>

     <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>

      <h1><center>View/Update Inventory</center></h1>
          <Table bordered={true}>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Item Id</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Item Weight</th>
                    <th>Item Category</th>
                    <th>Item Quantity</th>
                    <th>Item Description</th>
                    <th>Item Added on </th>
                </tr>
            </thead>
            <tbody>
                {this.state.items.map((Item: item) =>
                    <tr key={Item.Inv_id}>
                        <td><input type="radio" value={Item.Inv_id} onChange={this.handleChange} /></td>
                        <td>{Item.Inv_id}</td>
                        <td>{Item.Inv_name}</td>
                        <td>{Item.Inv_price}</td>
                        <td>{Item.Inv_weight}</td>
                        <td>{Item.Inv_type}</td>
                        <td>{Item.Inv_Quantity}</td>
                        <td>{Item.Inv_Description}</td>
                        <td>{Item.Inv_AddedAt}</td>
                    </tr>
                )}
            </tbody>
          </Table>
          <FormGroup>
              <Button type="submit" onClick={this.submitClicked}>Edit</Button>
          </FormGroup>
      </Form>

    );
  }
}
