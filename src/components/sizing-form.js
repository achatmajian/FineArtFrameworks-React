import React from "react";
import "./sizing-form.css";

class SizingForm extends React.Component {
    render() {
      return (
          <div class="sizing box" id="sizing-form">
  
            <h1>Sizing</h1>
  
            <div class="field">
              
                <div id="image-dimensions">
                  <p>Image Dimensions (Inches)</p>
                </div>
              
                <div id="image-height-input">
                  <p>Image Height*</p>
                  <input class="input" type="text" placeholder='"' required></input>
                </div>
                
                <div id="image-width-input">
                  <p>Image Width*</p>
                  <input class="input" type="text" placeholder='"' required></input>
                </div>
                
            </div>
  
            <div id="floater-radio">
              <p>Floater Frame?*</p>
              
              <div class="radio-container">
              
              <div id="no3">
                  <label class="radio-inline" id="no2">
                  <input type="radio" name="optradio" id="no" checked />No
                  </label>
              </div>
              <div id="yes3">
                  <label class="radio-inline" id="yes2">
                  <input type="radio" name="optradio" id="yes" />Yes
                  </label>
              </div>
              
              </div>
  
            </div>
  
            
            <div class="width-depth-container">
  
              <div id="frame-depth-input">
                  <p>Frame Depth*</p>
                  <input class="input" type="text" placeholder='"' required></input>
              </div>
  
              <div id="frame-width-input">
                  <p>Frame Width*</p>
                  <input class="input" type="text" placeholder='"' required></input>
              </div>
  
            </div>
  
          </div>
  
      );
    }
  }


  

export default SizingForm;