import React,{ Component} from 'react';
import Navigation from '../Navigation';
import './issued.css';
class Issued extends Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
      console.log(this.state.data.length);
 fetch('http://localhost:3000/showissue',
  {
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    id:this.props.id
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
  window.alert("NO ITEMS ISSUED");
 })
.catch(err=>{
  window.alert("NO ITEMS ISSUED");
 
 })
  }
  render() {
  return(

    <div  className="App">
<Navigation  isSignedIn={true} onRouteChange1='/Buttons' onRouteChange={this.props.onRouteChange} />
      <div >
      {
      (!this.state.data.length)?
      <h1>NO ITEM ISSUED</h1>
      :
      (
      <div>
      <table>
      <tbody>
      <tr key = {"COLUMN NAME"}>
                      <td><h2>ITEM_ID   </h2></td>
                      <td><h2>AUTHOR   </h2></td>
                      <td><h2>ISSUE_DATE   </h2></td>
                      <td><h2>RETURN_DATE   </h2></td>
                  </tr>
                   {this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.item_id}</td>
                      <td>{item.author}</td>
                      <td>{item.issue_date}</td>
                      <td>{item.return_date}</td>
                  </tr>
                )
             
             })}
     </tbody>
       </table>
       </div>)
       
     }
       </div>
       </div>
    )
  }
}

export default Issued;
