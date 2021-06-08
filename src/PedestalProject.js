import React from 'react';
import p1 from './pedestalpics/photo1.png';
import p2 from './pedestalpics/photo2.png';
import p3 from './pedestalpics/photo3.png';
import p4 from './pedestalpics/photo4.png';
import p5 from './pedestalpics/photo5.png';
import p6 from './pedestalpics/photo6.png';
import p7 from './pedestalpics/photo7.png';
// 1 2 3
// 4 5
// 6 7

class PedestalProject extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
    return (
        <div className="picDetails">
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
        <img src={p6}></img>
        <img src={p7}></img>
      </div>
      </div>
      );
    }
  }
export default PedestalProject;