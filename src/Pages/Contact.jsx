import React from 'react'

const Contact = () => {
  return (
    <div className='contact-wrapper d-flex align-items-center justify-content-center text-white text-center'>
      <div className='overlay'> </div>
      <div className='content position-relative'>
        <h1 className='fw-bold mb-2'>Contact Us</h1>
        <div className='bg-white rounded-pill shadow mx-auto d-flex align-items-center p-2 gap-2 form-box'>
          <input type="text"
            className='form-control rounded-pill border-0'
            placeholder='Enter Your Name' />
          <input type="Email"
            className='form-control rounded-pill border-2'
            placeholder='Enter Your Email Address' />
          <button className='btn bg-success text-white rounded-pill fw-bold px-4'>SUBMIT</button>
        </div>

        <div className='container mt-5'>
          <div className='row gy-4 justify-content-center '>
            {/* card 1 */}
            <div className='col-md-4 d-flex justify-content-center '>
              <div className='p-4 text-white rounded-4 bg-success text-strat' style={{ width: "260px" }}>
                <h5 className='fw-bold mb-3 '>Call US 📞</h5>
                <p className='mb-1 '> 1 (295) 981-812</p>
                <p className='mb-1 '> 1 (295) 981-812</p>
              </div>
            </div>
            {/* card 2 */}
            <div className='col-md-4 d-flex justify-content-center '>
              <div className='p-4 text-white rounded-4 bg-success text-strat' style={{ width: "260px" }}>
                <h5 className='fw-bold mb-3 '> 📍 Loction </h5>
                <p className='mb-1 '> 48 Asta home</p>
                <p className='mb-1 '> Ahemdabd 382435</p>
              </div>
            </div>
            {/* card 3 */}

            <div className='col-md-4 d-flex justify-content-center '>
              <div className='p-4 text-white rounded-4 bg-success text-strat' style={{ width: "260px" }}>
                <h5 className='fw-bold mb-3 '> ⏰ Hourse </h5>
                <p className='mb-1 '>Mon - Fri : 11am  to 8pm</p>
                <p className='mb-1 '> Sat -Sun : 6am to 8pm </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
