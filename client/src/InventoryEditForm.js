import React, { Component } from 'react';


export default class InventoryEditForm extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.callcase=this.callcase.bind(this);
      this.state = {
      items: this.props.items
      }
    }

callcase(){
  console.log(this.state.items);
}

  handleSubmit() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      // <div>
      //   <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      // </div>
      <div>
            <h1> <center>Update Inventory</center></h1>
            <button onClick={this.handleSubmit}>Submit</button>
      </div>

    );
  }

}
