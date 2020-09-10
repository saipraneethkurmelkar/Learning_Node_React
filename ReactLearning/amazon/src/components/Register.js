import React,{Component} from 'react';

export class RegisterComponent extends Component{
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
            <h1>Register</h1>
            <div>User Name: <input type="text" name="username" onChange={this.handleInputchange}/></div>
            <div>Password : <input type="text" name="password" onChange={this.handleInputchange}/></div>
            <div>First Name : <input type="text" name="firstname" onChange={this.handleInputchange}/></div>
            <div>Last Name : <input type="text" name="lastname" onChange={this.handleInputchange}/></div>
            <div>Email : <input type="email" name="email" onChange={this.handleInputchange}/></div>
            <div>Age : <input type="integer" name="age" onChange={this.handleInputchange}/></div>
            <div>
            <input type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
            <label for="male">Male</label>
            </div>
            <div>
            <input type="radio" id="female" name="gender" value="female" onChange={this.handleInputChange}/>
            <label for="female">Female</label>
            </div>
            <div>
            <input type="checkbox"/> I agree to the terms and conditions
            </div>
            <div>
            <button type="button" onClick={this.handleInputChange}>Register</button>
            </div>

            
        </div>
    }
}