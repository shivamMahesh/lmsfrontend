import React,{ Component} from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from '../Navigation';
const initialstate={
			id:'',
			title:'',
			author:'',
			redirect1:false
		};
class Home extends Component
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


onTitleChange=(event)=>
{
	this.setState({title: event.target.value});
}

onAuthorChange=(event)=>
{
	this.setState({author: event.target.value});
}


onButtonSubmit=(event)=>
{
  const {title,author}=this.state;
  if(title==="")
    window.alert("TITLE NOT ENTERED")
  else if(author==="")
      window.alert("AUTHOR NOT ENTERED");
    else
    {
	this.setState({id:this.props.id});
	 fetch('http://localhost:3000/request',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    mem_id:this.state.id,
    title:this.state.title,
    author:this.state.author
  })
  })
  .then(response=>response.json())
  .then(user=>{
    if(user.mem_id)
 window.alert("request accepted")
else
window.alert("REQUEST NOT ACCEPTED");
this.setState({redirect1:true});
}).catch(err=>
{
	window.alert("REQUEST NOT ACCEPTED");
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
      <legend className="f2 fw6 ph0 mh0">REQUEST ITEM</legend>
      <div className="mt0">
        <label className="db fw6 lh-copy f7" htmlFor="title" required>TITLE</label>
        <input onChange={this.onTitleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="title"  id="title" />
      </div>
      <div className="mt0">
        <label className="db fw6 lh-copy f7" htmlFor="author" required>AUTHOR</label>
        <input onChange={this.onAuthorChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="author"  id="author" />
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

export default Home;
