import React,{ Component} from 'react';
import Navigation from '../Navigation';
import './showrequest.css';
class ShowRequest extends Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
 fetch('http://localhost:3000/showrequest1',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    mem_id:this.props.id
  })
  })
.then(response=>response.json())
 .then(data=>
 {
if(data[0].mem_id)
  {
  this.setState({data:data})
 }
 else
  window.alert("NO REQUESTS MADE BY YOU");
 })
.catch(err=>{
  window.alert("NO REQUESTS MADE BY YOU");
 
 })
  }
  render() {
    
  return(
    <div  className="App">
<Navigation  isSignedIn={true} onRouteChange1='/Buttons' onRouteChange={this.props.onRouteChange} />
      <div >
      {
      (!this.state.data.length)?
      <h1>NO REQUEST MADE</h1>
      :
      (
      <table>
      <tbody>
      <tr key = {"COLUMN NAME"}>
                      <td><h2>TITLE   </h2></td>
                      <td><h2>AUTHOR   </h2></td>
                      <td><h2>REQUEST_DATE   </h2></td>
                  </tr>
      {this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.req_date}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>)
    }
       </div>
       </div>
    )
  }
}

export default ShowRequest;
