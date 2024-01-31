import React, { useEffect } from 'react';
import "./App.css"; 
import ImageEffect from './components/ImageEffect';
import AOS from 'aos';


function App(){

  useEffect(() => {
    AOS.init();
  }, []); 
  
  return(
    <>
    <div className="heading" data-aos="fade-left">
      <h1>Gallery</h1>
    </div>
    <div style={{backgroundColor :'black'}}>
    <ImageEffect/>
    </div>
    
    </>
    
  
  );
  
}

export default App;
