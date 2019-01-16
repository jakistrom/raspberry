import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        login: '',
        password: '',
        info: ''
      };
       
    loginHandler = (event) => {
        this.setState({ login: event.target.value });
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    fetchAPI = (event) => { 
        event.preventDefault();       
        const newPost = {
            login: this.state.login,
            password: this.state.password
        }          
        fetch(`https://recruitment-api.pyt1.stg.jmr.pl/login`, {
            method: 'post',
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .then( data => {
            console.log('response', data)
            if(data.status === 'ok'){
                window.location.href = "https://www.jmr.pl/pl/";
            }
            else{
                this.setState({
                    info: data.message
                })
            }
        })

}
    
    render() {

        return (
            <div className="Form">
                <form className="Form__content" onSubmit={this.fetchAPI}>
                    <h2>Are you a Raspberry Knight?</h2>
                    <input id="login" type="text" placeholder="Email" onChange={this.loginHandler}/>
                    <input id="password" type="password" placeholder="Password" onChange={this.passwordHandler}/>
                    <p>{this.state.info}</p>
                    <button type="submit" className="loginBtn">log in</button>
                </form>
            </div>
        )
    }  
}

export default Form;