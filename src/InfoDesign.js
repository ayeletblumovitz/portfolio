import React from 'react';
import content from './infocontent.png';

class InfoDesign extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
    return (
      <div className="picDetails">
        <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
          <div className="images">
          <img id="infographic" src={content}></img>
          </div>
      </div>
        
        
      );
    }
  }
export default InfoDesign;