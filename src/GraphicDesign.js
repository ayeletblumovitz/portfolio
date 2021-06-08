import React from 'react';
import p1 from './camppics/photo1.png';
import p2 from './camppics/photo2.png';
import p3 from './camppics/photo3.png';

class GraphicDesign extends React.Component {  
    
    render () {
      window.scrollTo(0, 0)
      return (
        <div className="picDetails" id="graphicPics">
          <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
          <div className="images">
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
          </div>
        </div>
      );
    }
  }
  export default GraphicDesign;