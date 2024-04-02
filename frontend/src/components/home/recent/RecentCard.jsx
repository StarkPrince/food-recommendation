import React from "react";
import { useHistory } from "react-router-dom";

const RecentCard = () => {
  const history = useHistory();

  const handleButtonClick = (link) => {
    history.push(link);
  };

  return (
    <>
      <div className='content grid3 mtop'>
        <div className='box shadow' key="1">
          <div className='img'>
            <img src="../images/list/sugar.jpg" alt='' />
          </div>
          <div className='text'>
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/Sugarreport')}>Diabetes Test</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="2">
          <div className='img'>
            <img src="../images/list/pressure1.jpg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/BloodPressurereport')}>Blood Pressure</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="3">
          <div className='img'>
            <img src="../images/list/cardiovascular.jpeg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/Cardiovascularreport')}>Cardiovascular Test</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="4">
          <div className='img'>
            <img src="../images/list/liver.jpeg" alt='' />
          </div>
          <div className='text'>
           
          </div>
          <div className='button flex'>
            <div>
            <button className='btn2' onClick={() => handleButtonClick('/LiverFunctionReport')}>Liver Function Test</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="5">
          <div className='img'>
            <img src="../images/list/cvc.jpg" alt='' />
          </div>
          <div className='text'>
           
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/CompleteBloodCountReport')}>Complete Bloodcount Test</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
        <div className='box shadow' key="6">
          <div className='img'>
            <img src="../images/list/kidney.jpg" alt='' />
          </div>
          <div className='text'>
            
          </div>
          <div className='button flex'>
            <div>
              <button className='btn2' onClick={() => handleButtonClick('/KidneyFunctionTestReport')}>Kidney Function Test</button>
              <label htmlFor=''></label>
            </div>
          </div>
        </div>        
        
      </div>
    </>
  );
};

export default RecentCard;
