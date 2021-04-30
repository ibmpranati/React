import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class Header extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return(
    <header className = "navbar">{this.props.name}</header>
    )
    }
}

export default Header;