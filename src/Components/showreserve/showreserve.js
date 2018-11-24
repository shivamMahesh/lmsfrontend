import React,{ Component} from 'react';
import Navigation from '../Navigation';
import './showreserve.css';
class ShowReserve extends Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
 fetch('http://localhost:3000/showreserve1',
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
  window.alert("NO RESERVES MADE BY YOU");
 })
.catch(err=>{
  window.alert("NO RESERVES MADE BY YOU");
 
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
      <table>
      <tbody>
      <tr key = {"COLUMN NAME"}>
                      <td><h2>ITEM_ID   </h2></td>
                      <td><h2>START_DATE   </h2></td>
                      <td><h2>END_DATE   </h2></td>
                  </tr>
      {this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.item_id}</td>
                      <td>{item.start_date}</td>
                      <td>{item.end_date}</td>
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

export default ShowReserve;
