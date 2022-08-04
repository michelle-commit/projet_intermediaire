import logo from './logo.svg';
import React, { useEffect, useState } from "react";

import './App.css';
import ProcessImage from './Compoments/ProcessImage';

function App() {
  const [image, setImage] = useState<any>();


  return (
    <div className='container'> 
      <div className='age'>
        <h1>Age Estimator</h1>
          
        <label className="btn" htmlFor="fileToUpload" >launch</label>
        <input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" hidden onChange=
          {(e) => {
            ProcessImage(e)
            let img = document.getElementById('img') as HTMLImageElement;
            if (img != null) {
              if (e?.target?.files != null) {
                let file = e?.target?.files[0]
                img.src = URL.createObjectURL(file)
              }
            }
          }
          } >
          </input>
          <div>
            <img id='img'/>
          </div>
        
      </div>

      <div className='ser'>
        <p id="opGender"></p>
        <p id="opEyeglasses"></p>
        <p id="opSunglasses"></p>
        <p id="opResult"></p>
        <p id="opBeard"></p>
        <p id="opSmile"></p>
        <p id="opBoundingBox"></p>
        <p id="opMustache"></p>
        <p id="opEyesopen"></p>
        <p id="opMouthopen"></p>
      </div>


    </div>
  );
}

export default App;
