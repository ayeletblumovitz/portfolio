import React from 'react';
import p1 from './archpics/photo1.png';
import p2 from './archpics/photo2.png';
import p3 from './archpics/photo3.png';
import p4 from './archpics/photo4.png';
import p5 from './archpics/photo5.png';
import p6 from './archpics/photo6.png';
import p7 from './archpics/photo7.png';
import p8 from './archpics/photo8.png';

class SpacialDesign extends React.Component {  
    
    render () {
      window.scrollTo(0, 0)
      return (
        <div className="picDetails">
          <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
          <div>
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
            <img src={p5}></img>
            <img src={p6}></img>
            <img src={p7}></img>
            <img src={p8}></img>
          </div>
        </div>
      );
    }
  
    
  }
  export default SpacialDesign;