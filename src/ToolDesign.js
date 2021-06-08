import React from 'react';
import p1 from './prodpics/photo1.png';
import p2 from './prodpics/photo2.png';
import p3 from './prodpics/photo3.png';
import p4 from './prodpics/photo4.png';
import p5 from './prodpics/photo5.png';

class ToolDesign extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
      return (
        <div className="picDetails" id="toolPics">
          <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
          <div className="images">
          <img src={p1}></img>
          <img src={p2}></img>
          <img src={p3}></img>
          <img src={p4}></img>
          <img src={p5}></img>
          </div>
        </div>
      );
    }
  }
  export default ToolDesign;