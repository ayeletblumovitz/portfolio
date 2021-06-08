import React from 'react';
import p1 from './sketchpics/Sketchbook1.jpeg';
import p2 from './sketchpics/Sketchbook2.jpeg';
import p3 from './sketchpics/Sketchbook3.jpeg';
import p4 from './sketchpics/Sketchbook4.jpeg';
import p5 from './sketchpics/Sketchbook5.jpeg';
import p6 from './sketchpics/Sketchbook6.jpeg';
import p7 from './sketchpics/Sketchbook7.jpeg';
import p8 from './sketchpics/Sketchbook8.jpeg';
import p9 from './sketchpics/Sketchbook9.jpeg';
import p10 from './sketchpics/Sketchbook10.jpeg';
import p11 from './sketchpics/Sketchbook11.jpeg';
import p12 from './sketchpics/Sketchbook12.jpeg';
import p13 from './sketchpics/Sketchbook13.jpeg';

class SketchDesign extends React.Component {  
    
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
        <img src={p5}></img>
        <img src={p4}></img>
        <img src={p6}></img>
        <img src={p7}></img>
        <img src={p8}></img>
        <img src={p9}></img>
        <img src={p10}></img>
        <img src={p11}></img>
        <img src={p12}></img>
        <img src={p13}></img>
        </div>
        </div>
        
      );
    }
  }
export default SketchDesign;