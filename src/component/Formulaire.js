import React, {Component} from 'react';
import "./Formulaire.css"
class Formulaire extends Component {

    state = {
        message:"",
    };

    createMessage = () => {
        const message = {
            pseudo:this.props.pseudo,
            message:this.state.message
        };
        this.props.addMessage(message);
        this.setState({message:""})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.createMessage()
    };

    handleChange = (event) => {
        const message = event.target.value;
        this.setState({message})
    };

    render() {
        return (
            <form className="form"
                  onSubmit={this.handleSubmit}>
                <textarea
                    onChange={this.handleChange}
                    required
                    maxLength={"140"}
                    value={this.state.message}
                />
                <div className="info">
                    140
                </div>
                <button type="submit" className="Btn">Envoyer</button>
            </form>
        );
    }
}

export default Formulaire;