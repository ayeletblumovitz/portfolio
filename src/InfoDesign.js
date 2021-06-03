import React from 'react';
import content from './infocontent.png';

class InfoDesign extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
    return (
        <div className="infoDesignDetails">
        <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
        <img id="infographic" src={content}></img>
        
        </div>
        
      );
    }
  }
export default InfoDesign;