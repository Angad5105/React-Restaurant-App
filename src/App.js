import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <table style={
          {
            backgroundColor: '#000',
            display: 'block',
            color:'#fff',
            fontSize: 24,
            textAlign: 'center',
            paddingLeft:'20px'
          }
        }>
        <tbody>
          <tr>
            <td>
              <h1>React Restaurant App</h1>
            </td>
          </tr>
        </tbody>

        </table>

       

       <div style={{
         display: 'flex',
         fontSize: 24,
         textAlign:'center',
         paddingLeft:'20px',
         paddingTop: '20px'
       }}> Search term:<input style={{
          fontSize: 20,
          display:'block',
          width:"30%",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: '20px',
          marginLeft:'55px'
        }} placeholder="Enter search term" name="place"/></div>

        <div style={{
         display: 'flex',
         fontSize: 24,
         textAlign:'center',
         paddingLeft:'20px',
         paddingTop: '20px'
       }}> Categories:<input style={{
          fontSize: 20,
          display:'block',
          width:"30%",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: '20px',
          marginLeft:'65px'
        }} placeholder="Enter search term" name="place"/></div>

        <div style={{
         display: 'flex',
         fontSize: 24,
         textAlign:'center',
         paddingLeft:'20px',
         paddingTop: '20px'
       }}> City/Location:<input style={{
          fontSize: 20,
          display:'block',
          width:"30%",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: '20px',
          marginLeft:'40px'
        }} placeholder="Enter search term" name="place"/></div>

        <div style={{
         display: 'flex',
         fontSize: 24,
         textAlign:'center',
         paddingLeft:'20px',
         paddingTop: '20px',
         
       }}> Sort By:<input style={{
          fontSize: 20,
          display:'block',
          width:"30%",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: '20px',
          marginLeft:'100px'
        }} placeholder="Enter search term" name="place"/></div>

        


        <button style={{
          width: '200px',
          height: '50px',
          marginTop: '20px',
          backgroundColor:'Cornflowerblue',
          fontSize: '20'
        }}>Search</button>


        {/* <Layout/> */}
       
        
      </div>
    );
  }
}

export default App;
