import React, { useState } from 'react'
import './homepage.css';
import sampleImage from './sample.jpg';
import backroundImage from './background.jpg';
import myImage from './backgroun1.jpg';

const Homepage = () => {


  const [modalOpen, setModalOpen] = useState(true);

  const handleModalClose = () => {
    setModalOpen(false);
  };




  return (
    <div className='auth__form-container'>
           
           {modalOpen && (
        <div className='modal'>
          <div className='modal-content' style={{fontFamily:"monospace",backgroundColor:"black",color:"white",textAlign:"left",padding:"50px"}}>
            <h2 style={{textAlign:"center"}}>Clinical Terms</h2>
            <p style={{marginTop:"20px"}}>1. Gender: M/F</p>
            <p style={{marginTop:"20px"}}>2. Age: Age</p>
            <p style={{marginTop:"20px"}}>3. EDUC: Years of Education (May vary typically 10 - 20)</p>
            <p style={{marginTop:"20px"}}>4. SES: Socioeconomic Status / 1-5</p>
            <p style={{marginTop:"20px"}}>5. MMSE: Mini Mental State Examination [0 = worst to 30 = best]</p>
            <p style={{marginTop:"20px"}}>6. CDR: Clinical Dementia Rating (0-3)</p>
            <p style={{marginTop:"20px"}}>7. eTIV: Estimated total intracranial volume</p>
            <p style={{marginTop:"20px"}}>8. nWBV: Normalize Whole Brain Volume</p>
            <p style={{marginTop:"20px"}}>9. ASF: Atlas Scaling Factor</p>
            <button onClick={handleModalClose} style={{marginTop:"40px",marginLeft:"10.5vw"}}>Proceed</button>
          </div>
        </div>
      )}

      <div className='auth__form-container_fields'>

        <div className='auth__form-container_fields-content' style={{
           backgroundImage: `url(${myImage})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Optional, adjusts the sizing of the image
          backgroundPosition: "center"
        }}>
          <p style={{ textAlign: "center",fontFamily:"monospace" }}>Enter the Clinical Data</p>

          <div style={{ display: "flex", flexDirection: "row" }}>

            <form onSubmit={() => { }} style={{marginLeft:"60vw",fontFamily:"monospace"}}>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='email'>Enter ID</label>
                <input name='id' type='text' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your gender</label>
                <input name='gender' type='text' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your age</label>
                <input name='age' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your net years of education</label>
                <input name='education' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your Socioeconomic status</label>
                <input name='status' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your MMSE</label>
                <input name='mmse' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your CDR</label>
                <input name='cdr' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your ETIV</label>
                <input name='etiv' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your NWBV</label>
                <input name='nwbv' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_input'>
                <label htmlFor='password'>Enter your ASF</label>
                <input name='asf' type='number' onChange={() => { }} required style={{ width: "25vw" }} />
              </div>

              <div className='auth__form-container_fields-content_button' style={{ marginLeft: "140px" }}>
                <button style={{ backgroundColor: "white", color: "blue" }}>Proceed</button>
              </div>
            </form>
            {/* <div className='auth__form-container_fields-account' style={{color:"white"}}>
                <p>
                   

                    Don't have an account?
                    
                    <span>
                       
                      
                        Sign Up
                   
                    </span>
                </p>
            </div> */}

            {/* <img src={sampleImage} style={{ height: "700px", width: "700px", marginLeft: "200px", marginTop: "30px" }} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
