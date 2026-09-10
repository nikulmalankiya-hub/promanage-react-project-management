import React from 'react'

const About = () => {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 d-flex justify-content-center mb-4  mb-md-0'>
                    <div className='blob-shape'>
                        <img src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2luZXNzJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="Team" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-6 '>
                    <h2 >About Us :</h2>
                    <h5 className='fw-bold'>Who We Are</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non soluta quisquam illo saepe voluptatem!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius placeat vero impedit consequuntur, laboriosam ad.</p>
                    <button className='btn btn-outline-success'>READ MORE &rarr; </button>
                </div>
            </div>
            <section className='py-5'>
                <div className='container '>
                    <h3 className='text-center fw-bold '>Manage Project <span className='text-success '>ProManage</span></h3>
                    <p className='text-center text-secondary mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tenetur.</p>
                    <div className='row g-4'>
                        {/* card 1 */}
                        <div className='col-md-6'>
                            <div className='p-4 rounded-4 shadow bg-dark  text-white h-100'>
                                <div className='d-flex justity-content-between'>
                                    <h4 className='fw-bold'>ProManages Essentialss</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt3 mb-1'>10th Desember , Satruday</p>
                                <p className='mb-4'>10:00 AM To 12:00 PM</p>
                                <button className='btn btn-success px-4 rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className='col-md-6'>
                            <div className='p-4 rounded-4 shadow bg-white h-100'>
                                <div className='d-flex justity-content-between'>
                                    <h4 className='fw-bold'>Advanced Project Planning</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt3 mb-1'>10th Desember , Satruday</p>
                                <p className='mb-4'>10:00 AM To 12:00 PM</p>
                                <button className='btn btn-success px-4 rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='col-md-6'>
                            <div className='p-4 rounded-4 shadow bg-white h-100'>
                                <div className='d-flex justity-content-between'>
                                    <h4 className='fw-bold'>Team COllaboration Mastery</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt3 mb-1'>10th Desember , Satruday</p>
                                <p className='mb-4'>10:00 AM To 12:00 PM</p>
                                <button className='btn btn-success px-4 rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>
                        {/* card 4 */}
                          <div className='col-md-6'>
                            <div className='p-4 rounded-4 shadow bg-dark  text-white h-100'>
                                <div className='d-flex justity-content-between'>
                                    <h4 className='fw-bold'>Risk Managemenet & Reporting</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt3 mb-1'>10th Desember , Satruday</p>
                                <p className='mb-4'>10:00 AM To 12:00 PM</p>
                                <button className='btn btn-success px-4 rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
