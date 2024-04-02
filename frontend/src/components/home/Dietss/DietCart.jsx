import React from "react";
import { useHistory } from "react-router-dom";

const DietCart = () => {
  const history = useHistory();

  const handleButtonClick = (link) => {
    history.push(link);
  };

  return (
    <>
      <div className='content grid3 mtop'>
        <div className='box shadow' key="1">
          <div className='img'>
            <img src="../images/dietss/highprotein.jpg" alt='' />
          </div>
          <div className='text'>
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/highprotein')}>High Protein Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="2">
          <div className='img'>
            <img src="../images/dietss/highfiber.jpg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/highfiber')}>High Fiber Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="3">
          <div className='img'>
          <img src="../images/dietss/keto.jpeg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/demo')}>Ketogenic Food Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="4">
          <div className='img'>
          <img src="../images/dietss/paleo.jpg" alt='' />
          </div>
          <div className='text'>
           
          </div>
          <div className='button flex'>
            <div>
            <button className='btn2' onClick={() => handleButtonClick('/demo')}>Paleo Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="5">
          <div className='img'>
            <img src="../images/dietss/vegan.avif" alt='' />
          </div>
          <div className='text'>
           
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/demo')}>Vegan Food Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="6">
          <div className='img'>
          <img src="../images/dietss/paleo.jpg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/weightgain')}> Weight Gaining Diet</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
      </div>
    </>
  );
};

export default DietCart;
