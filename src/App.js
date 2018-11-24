import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Home from './Components/home/home';
import Verify from './Components/Verify/Verify';
import Buttons from './Components/Buttons/Buttons';
import Forget from './Components/forget/Forget';
import Pass from './Components/pass/Pass';
import Show from './Components/show/show';
import Issued from './Components/issued/issued';
import Reserve from './Components/reserve/reserve';
import ShowReserve from './Components/showreserve/showreserve';
import ShowRequest from './Components/showrequest/showrequest';
import First from './first';
import Error from './Components/Error';
const initialstate={
      id:'',
      redirect:false
}

class App extends Component {
  
  constructor()
  {
    super();
    this.state=initialstate
  }

  
onRouteChange=()=>
{ 
 var r = window.confirm("ARE YOU SURE!");
  if (r === true) {
     this.setState(initialstate);
  return `/`;
}
else 
return false;
}

idChange=(id)=>
{
  this.setState({id:id});
}



render() 
{
    return (
      <BrowserRouter>
      <div>
   <Switch>
      <Route exact path='/' component={First} />
      <Route path='/Signin'  render={(props) => (
    <Signin   id={this.state.id} idChange={this.idChange} />)}/>

      <Route path='/Register' render={(props) => (
    <Register   id={this.state.id} idChange={this.idChange} />)}/>

       <Route path='/Forget'  render={(props) => (
    <Forget onRouteChange={this.onRouteChange} id={this.state.id} idChange={this.idChange} />)}/>

      <Route path='/Verify'  render={(props) => (
    <Verify onRouteChange={this.onRouteChange} id={this.state.id}/>)}/>
             
      <Route path='/Buttons'  render={(props) => (
    <Buttons onRouteChange={this.onRouteChange} id={this.state.id}  />)}/>

 <Route path='/Show'  render={(props) => (
    <Show onRouteChange={this.onRouteChange} id={this.state.id} />)}/>
 
 <Route path='/Issued'  render={(props) => (
    <Issued onRouteChange={this.onRouteChange} id={this.state.id}  />)}/>

      <Route path='/Pass'  render={(props) => (
    <Pass onRouteChange={this.onRouteChange} id={this.state.id} />)}/>


      <Route path='/Reserve'  render={(props) => (
    <Reserve onRouteChange={this.onRouteChange} id={this.state.id} />)}/>

      <Route path='/ShowReserve'  render={(props) => (
    <ShowReserve onRouteChange={this.onRouteChange} id={this.state.id} />)}/>

      <Route path='/ShowRequest'  render={(props) => (
    <ShowRequest onRouteChange={this.onRouteChange} id={this.state.id} />)}/>

      <Route path='/Home'  render={(props) => (
    <Home onRouteChange={this.onRouteChange} id={this.state.id} />)}/>

    <Route component={Error}/>
    </Switch>
  </div>
  </BrowserRouter>
    );
}
}

export default App;
