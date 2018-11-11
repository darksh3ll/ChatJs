import React, { Component } from 'react';
import './App.css';
import Formulaire from "./component/Formulaire";
import Message from "./component/Message";

//firebase
//import base from "./component/base"

class App extends Component {
    state = {
        messages:{},
        pseudo:this.props.match.params.pseudo,
        arr:[12,23,65,98]
    };

    addMessage = (message) => {
        const messages = {...this.state.messages};//Copie du state
        messages[`message-${Date.now()}`] = message;
        this.setState({messages});

};


  render() {


    return (
      <div className="App">
          <div className="messages">
              {
                  this.state.arr.map((x)=> <Message num={x}/>)
              }

          </div>
          <Formulaire
            addMessage={this.addMessage}
            pseudo={this.state.pseudo}
          />
      </div>
    );
  }
}

export default App;
