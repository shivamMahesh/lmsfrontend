import React from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from '../Navigation';
const initialstate={
      id:'',
      redirect:false
    }
class  Forget extends React.Component
{
  
 constructor(props)
{
    super(props);
    this.state=initialstate
}

onIdChange=(event)=>
{
  this.setState({id:event.target.value});
}

onSubmitSign=()=>
{
    this.props.idChange(this.state.id);
  const {id}=this.state;
  if(!id)
  {
  window.alert(`ID NOT ENTERED`);
  }
  else
  {
  fetch('http://localhost:3000/mail1',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    id:this.state.id,
    flag:"1"
  })
  })
  .then(response=>response.json())
  .then(user=>{
  if(user===false)
  {
    window.alert(`id does'nt exits`);
  }
  else
  {
    window.alert('enter new password and the token send to your email');
    this.setState({redirect:true});
  }})
  }
}
render()
{
  if(this.state.redirect===true)
    return <Redirect push to='/Pass' />;
	return(
    <div>
<Navigation  isSignedIn={false} onRouteChange1='/' />
    <article className="br3 ba  b--black-10 mv2 w-100 w-50-m w-25-l mw6  shadow-5 center">
    <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">FORGET PASSWORD</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address" required>ID</label>
        <input onChange={this.onIdChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onSubmitSign} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="SUBMIT"
       />
    </div>
    </div>
  </main>
  </article>
  </div>);
}
}

 export default Forget;