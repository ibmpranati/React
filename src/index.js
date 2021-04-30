// Using object for CSS properties
import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component{

    render(){
      const MyStyle = {
        backgroundColor: "Blue",
        fontFamily: "Arial"
      };

      return(
        <div>
          <h2 style = {MyStyle}>Hello Style!</h2>
        </div>
      )
    }
  }
  
  ReactDOM.render(<MyApp />, document.getElementById('root'))

//-------------------------------------------------------------------------------------------
//Using props in header and footer

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header'
// import Footer from './Footer'

// class MyApp extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     const myname = "Pranati";
//     const university = "Babu Banarasi Das University"
//     return(
//       <div>
//         <Header name = {myname} />
//         <h2>I am in {this.props.place}</h2>
//          <Footer university = {university} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<MyApp place = "Lucknow" />, document.getElementById('root'))

//-----------------------------------------------------------------------------------------
//props in constructor

// class Data extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return <h1>Here I am at {this.props.place}</h1>
//   }
// }

// ReactDOM.render(<Data place = "Lucknow" />, document.getElementById('root'))

//-------------------------------------------------------------------------------------

// class Home extends React.Component{
//   render(){
//     return <h1>I am in {this.props.IBM}</h1>
//   }
// }

// class MyApp extends React.Component{
//   render(){
//     const myname = "IBM";
//     return(
//       <div>
//         <h1>What is the data here?</h1>
//         <Home IBM = {myname} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(MyApp, document.getElementById('root'));

//---------------------------------------------------------------------------------------
// import './index.css';
// import App from './App'

// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = {color: "Blue"};   //used only in class component
//   }

//   render (){
//     return <h3>Hey, I am a {this.state.color} car!</h3>;
//   }
// }
// //render
// ReactDOM.render(<App />, document.getElementById('root'));

// //ReactDOM.render(What do I have to render, where do I want to render it)