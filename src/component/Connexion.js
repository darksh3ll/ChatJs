import React, {Component} from 'react';
import "./Connexion.css"
import {Redirect} from "react-router-dom"

class Connexion extends Component {
    state = {
        pseudo:"",
        gotoChat:false
    };

    handleChange = event => {
        const pseudo = event.target.value;
        this.setState({pseudo})
    };
    handleSubmit = event => {
        event.preventDefault();
        this.setState({gotoChat:true})
    };
    render() {
        if (this.state.gotoChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (

            <div className="connexionBox">
                <h1>Twitter Wilder-School</h1>
                <form className="connexion">
                    <input
                        placeholder="pseudo"
                        type="text"
                        required
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>GO</button>
                </form>
            </div>
        );
    }
}

export default Connexion;