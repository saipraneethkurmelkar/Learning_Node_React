import React,{Component} from 'react';


export class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }

    }
    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState= this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }
    render(){
        return <div>
            <h1>LogIn</h1>
            <input type="text" placeholder="User Name" name="username" onChange={this.handleInputchange}/>
            <input type="text" placeholder="Password" name="password" onChange={this.handleInputchange}/>
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
        </div>
    }
}