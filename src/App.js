import React, { Component } from 'react';
import './App.css';
import Formulaire from "./component/Formulaire";
import Message from "./component/Message";

//firebase
//import base from "./component/base"

class App extends Component {
    state = {
        messages:{},
        pseudo:this.props.match.params.pseudo
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
                <Message pseudo={this.state.pseudo}/>
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
