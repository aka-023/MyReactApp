import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props) {
  return (
    <>
    <div className={`text-center  text-${props.mode === 'light'? 'dark':'light'}-start bg-${props.mode} text-muted `}>
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> */}
        
        {/* <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div> */}
        
      {/* </section> */}
      
      <section className="">
        <div className={`container text-center text-${props.mode === 'light'? 'dark':'light'} text-md-start mt-5 pt-1`}>
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Text Verse
              </h6>
              <p>
              TextVerse's CaseCanvas, streamlining website letter case for uniformity, and LingoLinker for multilingual communication, enhancing global connectivity.
              </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="https://aka-023.github.io/TextUtils/" target='_blank' className="text-reset">CaseCanvas</a>
              </p>
              <p>
                <a href="https://aka-023.github.io/LingoLinker/" target='_blank' className="text-reset">LingoLinker</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Voice2ScriptHub</a> 
              </p>
            </div>
    
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>IIIT Allahabad</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                textVerse@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
            </div>
          </div>
          
        </div>
      </section>     
    </div>
    </>
  );
}
