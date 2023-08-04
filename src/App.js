// import logo from './logo.svg';
// import './App.css';
// import Cars from './Cars';
// import Test1 from './Test1';
// // export function ForTest({event}){
// //   event();
// // }

// import React, { Component } from 'react'

// export class ForTest extends Component {
//   testFunc() {
//     this.props.event()
//   }
//   render() {
//     return (
//       <div>
//         <Test1 event={this.testFunc}></Test1>

//       </div>
//     )
//   }
// }

// function App() {
//   function addCar() {
//     alert("Hello")
//   }
//   return (
//     <div >
//       <ForTest event={addCar}></ForTest>
//     </div>
//   );
// }

// export default App;



// App.js
import React, { Component, useState } from 'react';
import Test1 from './Test1';
import Cars from './Cars';
import Form from './Form';
import { carDatas } from './Data';

// export class ForTest extends Component {
//   testFunc() {
//     alert(this.props.event)
//   }
//   render() {
//     return (
//       <div>
//         <Test1 event={this.testFunc} />
//       </div>
//     );
//   }
// }


export function ForTest(event) {
  function testFunc() {
    event.event()
  }
  return (
    <div>
      <Test1 event={testFunc} />
    </div>
  )
}



function App() {
  const [cars, setCars] = useState(carDatas)
  function addCar(car) {
    console.log(car)
    setCars([...cars, car])
    console.log(cars)
  }

  const divStyle = {
    width: '50%',
    display: 'inline-block',
    matgin:'auto'
    // Add other style properties if needed
  };
  return (
    <div>
      <div style={divStyle}>

        <Cars cars={cars}></Cars>
      </div>
      <div style={divStyle}>

        <Form addCar={addCar}></Form>
      </div>
    </div>
  );
}

export default App;
