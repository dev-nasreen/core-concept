
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:"Photoshop", price:"$230"},
    {name:"Illustrator", price:"$130"},
    {name:"PDF", price:"$30"},
    {name:"Figma", price:"$28"},
    {name: "computer", Price:'180'}
  ]

  return (
    <div className="App">
       <Counter></Counter>
       <Users></Users>
      {
        products.map(pd => <Products product = {pd}></Products>)
      }
     
    </div>
    
  );
function Counter(){
  const [count, setCount] = useState(0);
 //const handleIncrease = () => setCount(count + 1);
 
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

  function Products(props){
    const myStyle= {
      width:'250px',
      height:'auto',
      border:'2px solid black',
      backgroundColor: 'gray',
      borderRadius:'5px',
      color:'#fff',
      float:'left',
      margin: '10px'
    }
    const btnStyle ={
      fontSize:'20px',
      color:'#fff',
      backgroundColor:'red',
      padding:'10px 20px',
      border:'1px  solid #000',
      marginBottom:'20px'
    }
  const {name, price} = props.product;
    return(
      <header style={myStyle}>
      <h1>{name}</h1>
      <p>This is my first react file. This is my first react file.
      This is my first react file. This is my first react file.
      </p>
      <h3>Price:{price}</h3>
      <button type="submit" style={btnStyle}>Buy Now</button>
    </header>
    )
  }
}

export default App;
