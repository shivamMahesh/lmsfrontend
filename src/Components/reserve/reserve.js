import React,{ Component} from 'react';
import Navigation from '../Navigation';
import {Redirect} from 'react-router-dom';
const initialstate={
			id:'',
			item_id:'',
			redirect1:false
		};
class Reserve extends Component
{
constructor(props)
{
		super(props);
		this.state =initialstate 
}

componentDidMount()
{
	this.setState({id:this.props.id});
}


onIdChange=(event)=>
{
	this.setState({item_id: event.target.value});
}


onButtonSubmit=(event)=>
{
  fetch('http://localhost:3000/checkreserve')
   .then(res=>res.json);
	this.setState({id:this.props.id});
  if(this.state.item_id==="")
    window.alert("ITEM ID NOT ENTERED");
  else
  {
	 fetch('http://localhost:3000/reserve',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    mem_id:this.state.id,
    item_id:this.state.item_id
  })
  })
  .then(response=>response.json())
  .then(user=>{
    if(user.id)
 window.alert("ITEM RESERVED")
else
  window.alert("ITEM NOT RESERVED");
this.setState({redirect1:true});
}).catch(err=>
{
	window.alert("ITEM NOT RESERVED");
	this.setState({redirect1:true});
})
}
}


render()
{
	if(this.state.redirect1===true)
		return <Redirect push to='/Buttons' />
	return(
		<div>
<Navigation  isSignedIn={true} onRouteChange1='/Buttons' onRouteChange={this.props.onRouteChange} />
		<div className="App">
	<article className="br3 ba  b--black-10 mv0 w-100 w-50-m w-25-l mw6  shadow-5 center">
		<main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">RESERVE ITEM</legend>
      <div className="mt0">
        <label className="db fw6 lh-copy f7" htmlFor="title" required>ITEM ID</label>
        <input onChange={this.onIdChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="title"  id="title" />
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f7 dib" 
      type="submit" 
      value="SUBMIT"
       />
    </div>
    </div>
  </main>
  </article>
	</div>
	</div>
)
}
}

export default Reserve;
