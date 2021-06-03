import React from 'react';

class PedestalProject extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
    return (
        <div className="backButton">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
            <p onClick={this.props.backFunc}>Back</p>
          </div>
        
      );
    }
  }
export default PedestalProject;