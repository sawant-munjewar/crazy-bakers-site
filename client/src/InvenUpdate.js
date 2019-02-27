import React, { Component } from 'react';
import {  Button,Table, Form, FormGroup} from 'reactstrap';
// import {RadioGroup, Radio} from 'react-radio-group';
import SearchBar from './search.js';
import InventoryEditForm from './InventoryEditForm.js';

export default class InvenUpdate extends Component {

  constructor(props) {
      super(props);
      this.state =  { items: [],
                      selectedOption: "default",
                       filterText: "",
                       editItems: []
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
        console.log(this.state.items);
        console.log(this.state.items.filter(item => item.id == event.target.value));

            this.setState({
              selectedOption: event.target.value,
              editItems: this.state.items.filter(item => item.id == event.target.value )
            });
          }
      }
    handleSubmitforEdit(event) {
        fetch('/UpdateInven', {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
              //  body: JSON.stringify(senddata)
              })
              .then(response => {
                response.json().then(data =>{
                  console.log("Successful" + data);
                });
              });
      }


submitClicked(){
this.refs.child.callcase();
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
                    <tr key={Item.id}>
                        <td><input type="radio" value={Item.id} onChange={this.handleChange} /></td>
                        <td>{Item.id}</td>
                        <td>{Item.name}</td>
                        <td>{Item.price}</td>
                        <td>{Item.weight}</td>
                        <td>{Item.type}</td>
                        <td>{Item.Quantity}</td>
                        <td>{Item.Description}</td>
                        <td>{Item.AddedAt}</td>
                    </tr>
                )}
            </tbody>
          </Table>
          <FormGroup>
              <Button type="submit" onClick={this.submitClicked}>Edit</Button>
          </FormGroup>

          <InventoryEditForm ref="child"/>
      </Form>

    );
  }
}
