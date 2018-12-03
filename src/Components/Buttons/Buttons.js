import React from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from '../Navigation';
const initialstate={
      name:'',
      id:'',
      redirect1:false,
      redirect2:false,
      redirect3:false,
      redirect4:false,
      redirect5:false
    };
class  Buttons extends React.Component
{
constructor(props)
{
    super(props);
    this.state=initialstate
}

componentDidMount()
{
this.setState({id:this.props.id});
  fetch('http://localhost:3000/showmember',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
  id:this.props.id,
  flag:"1"})
  })
  .then(response=>response.json())
  .then(user=>
  {
  this.setState({
  name:user.name
})})
  .catch(err=>
  {
  window.alert('stop');})
}

onResetPassword=()=>
{
	fetch('http://localhost:3000/mail1',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    id:this.state.id,
    flag:"1"})
  })
  .then(response=>response.json())
  .then(user=>{
  if(user===false)
  {
    window.alert(`email does'nt exits`);
  }
  else
  {
    window.alert('enter new password and the token send to your email');
  this.setState({redirect1:true});
  }})

}

onButtonSubmit1=()=>
{
  this.setState({redirect2:true});
}
onButtonSubmit2=()=>
{
  this.setState({redirect3:true});
}
onButtonSubmit3=()=>
{
  this.setState({redirect4:true})
}
onButtonSubmit4=()=>
{
  this.setState({redirect5:true})
}
onButtonSubmit5=()=>
{
  this.setState({redirect6:true})
}
onButtonSubmit6=()=>
{
  this.setState({redirect7:true})
}
render()
{
   if(this.state.redirect1===true)
   return <Redirect push to="/Pass" />;
else if(this.state.redirect2===true)
   return <Redirect push to="/Home" />;
 else if(this.state.redirect3===true)
   return <Redirect push to="/Show" />;
  else if(this.state.redirect4===true)
   return <Redirect push to="/Issued" />;
  else if(this.state.redirect5===true)
   return <Redirect push to="/Reserve" />;
 else if(this.state.redirect6===true)
   return <Redirect push to="/ShowRequest" />;
 else if(this.state.redirect7===true)
   return <Redirect push to="/ShowReserve" />;

   const {name,id}=this.state;
  return(
	<div className="App"> 
  <Navigation  isSignedIn={true} onRouteChange1='/' onRouteChange={this.props.onRouteChange} />
	<h2>{`WELCOME ${name} ID: ${id}`}</h2>
 <div className='mv4 ml0'>
 		  <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit1}>REQUEST ITEMS</button>
  </div>
   <div className='mv4 ml0'>
      <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit4}>RESERVE ITEMS</button>
  </div>
  <div className='mv4 ml0'>
      <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit2}>SHOW ITEMS IN THE LIBRARY</button>
  </div>
  <div className='mv4 ml0'>
      <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit3}>SHOW YOUR ISSUED ITEMS</button>
  </div>
   <div className='mv4 ml0'>
      <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit5}>SHOW YOUR REQUESTED ITEMS</button>
  </div>
   <div className='mv4 ml0'>
      <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onButtonSubmit6}>SHOW YOUR RESERVED ITEMS</button>
  </div>
  <div className='mv4 mr0'>
  <button className='w-30 grow f4 link ph3 pv3 dib white bg-light-purple' onClick={this.onResetPassword}>RESET PASSWORD</button>
	</div>
	</div>
	);
}
}
export default  Buttons; 
