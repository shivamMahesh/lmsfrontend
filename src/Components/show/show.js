import React,{ Component} from 'react';
import Navigation from '../Navigation';
import SearchBox from './SearchBox';
import SearchBox1 from './SearchBox1';
import './show.css';
class Show extends Component {
  constructor(){
    super() 
      this.state = {
        data: [],
        searchfield:'',
        searchfield1:''
      }
    
  }
  componentDidMount() {
 fetch('http://localhost:3000/showitem')
 .then(response=>response.json())
 .then(data=>
 {
if(data[0].id)
  {
  this.setState({data:data})
 }
 else
  window.alert("NO ITEMS IN THE LIBRARY");
 })
.catch(err=>{
  window.alert("NO ITEMS IN THE LIBRARY");
 
 })
}

onSearchChange=(event)=>
{
  this.setState({searchfield: event.target.value});
}
onSearchChange1=(event)=>
{
  this.setState({searchfield1: event.target.value});
}

  render() {
    const {data,searchfield,searchfield1}=this.state;
    const data1=data.filter(dat=>{
    return dat.title.toLowerCase().includes(searchfield.toLowerCase())})
       const data2=data1.filter(dat=>{
    return dat.author.toLowerCase().includes(searchfield1.toLowerCase())})
    
  return(
    <div  className="App">
<Navigation  isSignedIn={true} onRouteChange1='/Buttons' onRouteChange={this.props.onRouteChange} />
<SearchBox OnsearchChange={this.onSearchChange}/>
<SearchBox1 OnsearchChange1={this.onSearchChange1}/>
      <div >
      {
      (!data2.length)?
      <h1>NO ITEM FOUND</h1>
      :
      (
      <table>
      <tbody>
      <tr key = {"COLUMN NAME"}>
                      <td><h2>ITEM_ID   </h2></td>
                      <td><h2>TITLE   </h2></td>
                      <td><h2>AUTHOR   </h2></td>
                      <td><h2>TYPE   </h2></td>
                      <td><h2>EDITION   </h2></td>
                      <td><h2>QUANTITY   </h2></td>
                      <td><h2>PRICE   </h2></td>
                  </tr>
      {data2.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.type}</td>
                      <td>{item.edition}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
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

export default Show;
