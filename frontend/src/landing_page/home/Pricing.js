import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Pricing () {
    return ( 
      <div className='container'>
        <div className='row align-items-center'>

            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>

                <p className='text-muted'>
                  We pioneered the concept of discount broking and price transparency in India. 
                  Flat fees and no hidden charges.
                </p>   

                <a 
                  href="#" 
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    fontWeight: "500"
                  }}
                >
                  See Pricing 
                  <FaArrowRight style={{ marginLeft: "6px" }} />
                </a>
            </div>

            <div className='col-2'></div>

            <div className='col-6 mb-5'>
                <div className='row text-center'>

                    <div className='col p-4 border rounded'>
                        <h1 className='mb-3'>₹0</h1>
                        <p className='text-muted'>
                          Free equity delivery <br />
                          and direct mutual funds
                        </p>
                    </div>

                    <div className='col p-4 border rounded ms-3'>
                        <h1 className='mb-3'>₹20</h1>
                        <p className='text-muted'>
                          Intraday and F&O
                        </p>
                    </div>

                </div>
            </div>

        </div>
      </div>
     );
}

export default Pricing;