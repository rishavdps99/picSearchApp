import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
//mport Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Login from './components/Login';

class NewApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }

  handlecount=()=>{
    this.setState(prevState=>{
      return{counter:prevState.counter+1}
    })
  }

  render(){
   
  return (
  
    <BrowserRouter>
    <div className="NewApp">
     <Navbar />
     
     <Route path="/about" component={About}/>
     <Route path="/login" component={Login}/>
     <Route path="/:profile_id" component={Profile} fun={(e)=>this.handlecount(e)} value={this.state.counter}/>
     
   
    </div>
    </BrowserRouter>
    
  );
  };
}

export default NewApp;
