import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {LoginComponent} from './components/Login';
import {RegisterComponent} from './components/Register'
const App=()=>{
    const companyName='PegaSystems';
    return <div>
        <Header title={companyName}/>
        <h1>Welcome to Pega!</h1>
        <LoginComponent/>
        <RegisterComponent/>
        <Footer/>
        </div>
};

export default App;