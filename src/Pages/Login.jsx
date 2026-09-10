import React from 'react'

const Login = () => {
    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <div className='row w-100 shadow rounded overflow-hidden' style={{ maxWidth: "900px" }}>
                <div className='col-md-4 bg-light d-flex flex-column  align-items-center justify-content-center p-4'>
                    <img src="https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8fDA%3D" alt="" className='img-fluid mb-3' style={{ maxWidth: "200px" }} />
                    <h5 className='fw-bold text-center'>Secure Login </h5>
                    <p className='text-muted text-center small'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='col-md-4 bg-white p-4'>
                    <h4 className='fw-bold mb-3 text-center text-success'>Login </h4>
                    <div className='mb-3'>
                        <label  className='form-label fw-bold'>User Name *</label>
                        <input type="text" className='form-control' placeholder='Enter Your Usersname' />
                    </div>
                      <div className='mb-3'>
                        <label  className='form-label fw-bold'>Password *</label>
                        <input type="Password" className='form-control' placeholder='Enter Your Password' />
                    </div>
                    <div className='mb-3 form-check'>
                        <input type="checkbox"  className='form-check-box' id='remember'/>
                        <label htmlFor="remember" className='form-check-box'>Remember</label>
                    </div>
                    <button className='btn text-white w-100 bg-success'>Login</button>
                </div>
                <div className='col-md-4 bg-light p-4 d-flex flex-column justify-content-center'>
                    <div className='text-center mb-3 '>
                        <a href="#"className='text-success text-decoration-none fw-bold '>Forget Password</a>
                    </div>

                     <div className='text-center mb-3 '>
                        <a href="#"className='text-success text-decoration-none fw-bold '>Create New Account </a>
                    </div>

                      <div className='text-center'>
                        <p className='small text-muted'>&copy; 2025 ProManage</p>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login
