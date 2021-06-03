import React from 'react';
import p1 from './photographypics/photo1.jpeg';
import p2 from './photographypics/photo2.jpeg';
import p3 from './photographypics/photo3.jpeg';
import p4 from './photographypics/photo4.jpeg';
import p5 from './photographypics/photo5.jpeg';
import p6 from './photographypics/photo6.jpeg';
import p7 from './photographypics/photo7.jpeg';

class Photography extends React.Component {  
    
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
          <img src={p5}></img>
          <img src={p4}></img>
          <img src={p6}></img>
          <img src={p7}></img>
          </div>
        </div>
      );
    }
  }
  export default Photography;