import React, { Component } from 'react';
import { Col, Button,Table, Form, FormGroup, Input } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class InventoryInsert extends Component {

  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.select = this.select.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        dropdownOpen: false,
        value: "select"
      };
    }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
    select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }
    handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // data.set('name', data.get('itemNameInput').toUpperCase());
    // data.set('price', data.get('itemprice');
    // data.set('type', data.get('itemddinput').toUpperCase());
    // data.set('weight', data.get('itemWt');
    // data.set('Quantity', data.get('itemQuantity');
    // data.set('Description', data.get('itemDesc');

    var senddata = [data.get('itemNameInput'),parseFloat(data.get('itemprice')),data.get('itemddinput'),parseFloat(data.get('itemWt')),parseInt(data.get('itemQuantity')),data.get('itemDesc')] ;

    console.log(senddata);

    fetch('/InsertInven', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(senddata)
          })
          .then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            });
          });
  }
    render(){
    return(

  <Form id="frm" onSubmit={this.handleSubmit}>
    <FormGroup  controlid="InventoryAddForm">
    <h1> <center>Add Inventory </center></h1>

    <Table size="xs">
    <tbody size="xs">
      <tr >
          <td>Item Name</td>
          <td><Input type="text" name="itemNameInput" id="itemNameInput" /></td>
      </tr>
      <tr >
          <td>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>Select Category</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Nothing selected</DropdownItem>
                <DropdownItem onClick={this.select}>Bakery</DropdownItem>
                <DropdownItem onClick={this.select} >Pasta</DropdownItem>
                <DropdownItem onClick={this.select}>Beverages</DropdownItem>
                <DropdownItem onClick={this.select}>Sandwitches</DropdownItem>
                <DropdownItem onClick={this.select}>Others</DropdownItem>
              </DropdownMenu>
            </Dropdown></td>

            <td><Input type="text" readOnly name="itemddinput" id="itemddinput" value={this.state.value} /></td>

      </tr>
      <tr>
          <td>Item Weight(kg)</td>
          <td><Input type="decimal" name="itemWt" id="itemWt" placeholder="type number in kg"/></td>
      </tr>
      <tr>
          <td>Item Quantity(Nos)</td>
          <td><Input type="integer" name="itemQuantity" id="itemQuantity" /></td>
      </tr>
      <tr>
          <td>Item Price</td>
          <td><Input type="decimal" name="itemprice" id="itemprice" /></td>
      </tr>
      <tr>
          <td>Item Description</td>
          <td><Input type="text" name="itemDesc" id="itemDesc" /></td>
      </tr>
    </tbody>
    </Table>
    </FormGroup>
    <FormGroup check row>
      <Col sm={{ size: 10, offset: 2 }}>
        <Button>Submit</Button>
      </Col>
    </FormGroup>
  </Form>
      );
  }
}

export default InventoryInsert;
