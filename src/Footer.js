import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class Footer extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return(
    <footer className = "footer">{this.props.university}</footer>
    )
    }
}

export default Footer;