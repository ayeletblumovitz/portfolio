import React from 'react';
import p1 from './prodpics/photo1.png';
import p2 from './prodpics/photo2.png';
import p3 from './prodpics/photo3.png';
import p4 from './prodpics/photo4.png';
import p5 from './prodpics/photo5.png';

class ProductDesign extends React.Component {  
    
    render () {
      window.scrollTo(0, 0)
      return (
        <div className="picDetails">
            <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
        </div>
        
      );
    }
  
    
  }
  export default ProductDesign;