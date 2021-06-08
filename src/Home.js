  import React from "react";
  import photographypic from './menupics/photography-small.jpg'
  import productdesign from './menupics/productdesign-small.jpg'
  import spacialdesign from './menupics/spacialdesign-small.png'
  import graphicdesign from './menupics/graphicdesign-small.jpg'
  import tooldesign from './menupics/tooldesign-small.png'
  import cubeproject from './menupics/cubeproject-small.jpg'
  import pedestalproject from './menupics/pedestalproject-small.png'
  import infodesign from './menupics/infodesign-small.png'
  import sketchdesign from './menupics/sketchdesign-small.png'
  // import { BrowserRouter, Route, Link } from 'react-router-dom'; 
  import { Route, Link } from 'react-router-dom'; 
  import { HashRouter as BrowserRouter } from 'react-router-dom';
  import Photography from './Photography.js';
  import GraphicDesign from './GraphicDesign.js';
  import SpacialDesign from './SpacialDesign.js';
  import ProductDesign from './ProductDesign.js';
  import InfoDesign from './InfoDesign.js';
  import ToolDesign from './ToolDesign.js';
  import CubeProject from './CubeProject.js';
  import PedestalProject from './PedestalProject.js';
  import SketchDesign from './SketchDesign.js';
  
  class Home extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        mode: "main"
      }
      this.updateState = this.updateState.bind(this);
      this.returnToMain = this.returnToMain.bind(this);
    }
    updateState (ev) {
      const newMode = ev.target.getAttribute("mode");
      this.setState({mode: newMode});
    }
    returnToMain () {
      this.setState({mode: "main"});
    }
    render () {
      window.scrollTo(0, 0)
      return (
        <div>
          {this.state.mode === "main" &&
                <div className="Home">
                <div className ="photography">
                  <Link className="img_description" mode="photography" onClick={this.updateState}>PHOTOGRAPHY</Link>
                  <img src={photographypic} alt="photography" mode="photography" onClick={this.updateState}/>
                </div>
                <div className ="productdesign">
                  <Link className="img_description" mode="productdesign" onClick={this.updateState}>SHOE PROJECT</Link>
                  <img src={productdesign} alt="productdesign" mode="productdesign" onClick={this.updateState}/>
                </div>
                <div className ="spacialdesign">
                  <Link className="img_description" mode="spacialdesign" onClick={this.updateState}>EXHIBITION DESIGN</Link>
                  <img src={spacialdesign} alt="spacialdesign" mode="spacialdesign" onClick={this.updateState}/>
                </div>
                <div className ="graphicdesign">
                  <Link className="img_description" mode="graphicdesign" onClick={this.updateState}>CAMPAIGN REDESIGN</Link>
                  <img src={graphicdesign} alt="graphicdesign" mode="graphicdesign" onClick={this.updateState}/>
                </div>
                <div className ="cubeproject">
                  <Link className="img_description" mode="cubeproject" onClick={this.updateState}>CUBE PROJECT</Link>
                  <img src={cubeproject} alt="cubeproject" mode="cubeproject" onClick={this.updateState}/>
                </div>
                <div className ="tooldesign">
                  <Link className="img_description" mode="tooldesign" onClick={this.updateState}>TOOL DESIGN</Link>
                  <img src={tooldesign} alt="tooldesign" mode="tooldesign" onClick={this.updateState}/>
                </div>
                <div className ="pedestalproject">
                  <Link className="img_description" mode="pedestalproject" onClick={this.updateState}>PEDESTAL PROJECT</Link>
                  <img src={pedestalproject} alt="pedestalproject" mode="pedestalproject" onClick={this.updateState}/>
                </div>
                <div className ="infodesign" >
                  <Link className="img_description" mode="infodesign" onClick={this.updateState}>INFOGRAPHIC DESIGN</Link>
                  <img src={infodesign} alt="infodesign" mode="infodesign" onClick={this.updateState}/>
                </div>
                <div className ="sketchdesign" >
                  <Link className="img_description" mode="sketchdesign" onClick={this.updateState}>SKETCH DESIGN</Link>
                  <img src={sketchdesign} alt="sketchdesign" mode="sketchdesign" onClick={this.updateState}/>
                </div>
              </div>  
          }
          {this.state.mode === "photography" && 
          <Photography backFunc={this.returnToMain}/>
          }
          {this.state.mode === "productdesign" && 
          <ProductDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "spacialdesign" && 
          <SpacialDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "graphicdesign" && 
          <GraphicDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "infodesign" && 
          <InfoDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "tooldesign" && 
          <ToolDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "pedestalproject" && 
          <PedestalProject backFunc={this.returnToMain}/>
          }
          {this.state.mode === "cubeproject" && 
          <CubeProject backFunc={this.returnToMain}/>
          }
          {this.state.mode === "sketchdesign" && 
          <SketchDesign backFunc={this.returnToMain}/>
          }
      </div>
        
          
    )
    }
  }
  export default Home;

  //onMouseOver={e => (e.currentTarget.src = productdesign)} onMouseOut={e => (e.currentTarget.src = photography)}