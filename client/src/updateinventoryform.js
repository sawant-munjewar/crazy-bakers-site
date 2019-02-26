import React, { Component } from 'react';

export default class updateinventoryform extends Component {

constructor(props){
  super(props);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event) {
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


render() {
  return(
     <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Submit" />
    </form>
  );
}

}
