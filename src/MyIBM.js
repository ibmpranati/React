import React from 'react';
import ReactDOM from 'react-dom';

//class component
class MyIBM extends React.Component{
  render(){  
    return(
      <div>
        <h3>Favourite Destinations</h3>
        {/* Checkboxes */}
        <input type = "checkbox" value = "Lansdowne" />Lansdowne
         <br />
         <input type = "checkbox" value = "Chandigarh" />Chandigarh
         <br />
         <input type = "checkbox" value = "Shimla" />Shimla
         <br />

         {/* Main content */}
         <img src="https://images-na.ssl-images-amazon.com/images/I/51ywsuQFt4L._SX398_BO1,204,203,200_.jpg"></img>
         <Footer />
         </div>
      )
    }
  }

  //stateless component, Footer component
  const Footer = () => (
         <div class="footer">
         <p>This is a footer</p>
        </div>
    );

  // export default MyIBM;