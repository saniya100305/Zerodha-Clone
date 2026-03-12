import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Education () {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>

                <div className='col-6'>
                    <img 
                      src='media/images/education.svg' 
                      style={{ width: "70%" }} 
                      alt="education"
                    />
                </div>

                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p className='text-muted'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>

                    <a 
                      href="#"
                      style={{
                        textDecoration:"none",
                        color:"#387ed1",
                        fontWeight:"500"
                      }}
                    >
                      Varsity 
                      <FaArrowRight style={{marginLeft:"6px"}} />
                    </a>

                    <p className='mt-5 text-muted'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>

                    <a 
                      href="#"
                      style={{
                        textDecoration:"none",
                        color:"#387ed1",
                        fontWeight:"500"
                      }}
                    >
                      Trading Q&A 
                      <FaArrowRight style={{marginLeft:"6px"}} />
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Education;