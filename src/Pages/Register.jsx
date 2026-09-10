import React from 'react'

const Register = () => {
    return (
        <div className='container py-5 '>
            <div className='row g-5 align-items-start mb-5'>
                <div className='col-lg-7'>
                    <h2 className='fw-bold text-dark mb-3'>Manage Projects with Ease-{" "}
                        <span className='text-success'>ProManage</span>
                    </h2>
                    <p className='text-muted fs-5 mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt qui ullam! Possimus a reiciendis, similique quod repellat incidunt excepturi.</p>
                    <p className='text-muted fs-5 mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt qui ullam! Possimus a reiciendis, similique quod repellat incidunt excepturi.</p>
                    <p className='text-muted fs-5 mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt qui ullam! Possimus a reiciendis, similique quod repellat incidunt excepturi.</p>
                    <p className='text-muted fs-5 mb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt qui ullam! Possimus a reiciendis, similique quod repellat incidunt excepturi.</p>
                    <div className='d-flex gap-3 mt-5'>
                        <button className='btn btn-outline-success px-4 py-2' >Learn More</button>
                        <button className='btn btn-success px-4 py-2' >Start Now</button>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='p-4 border rounded shadow-sm bg-white'>
                        <h4 className='text-center fw-bold mb-4 '>Register Now </h4>
                        <form>
                            <div className='mb-4'>
                                <label className='form-label fw-semibold'>Full Name</label>
                                <input type="text" className='form-control form-control-lg ' />
                            </div>
                            <div className='mb-4'>
                                <label className='form-label fw-semibold'>Email</label>
                                <input type="Email" className='form-control form-control-lg ' />
                            </div>
                            <div className='mb-4'>
                                <label className='form-label fw-semibold'>Phone</label>
                                <input type="number" className='form-control form-control-lg ' />
                            </div>
                            <div className='mb-4'>
                                <label className='form-label fw-semibold'>Select Planss </label>
                                <select name="" id="" className='form-select form-select-lg'>
                                    <option >Free Plan</option>
                                    <option >Pro Plan</option>
                                    <option >Enter Plan</option>

                                </select>
                                <button className='btn btn-success w-100  py-2 fs-5 mt-5'> Register Now </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-center mb-4'>
                <h3 className='fw-bold mb-3'>Unloock Your Project Power</h3>
                <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, iure.</p>
            </div>
            <div className='row g-4'>
                <div className='col-md-3'>
                    <div className='card h-100 shadow-sw  p-2 '>
                        <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjBwbGFuaW5nfGVufDB8fDB8fHww" alt="" className='card-img-top' />
                        <div className='card-body '>
                            <h6 className='fw-bold mb-1 '>Smart Planing </h6>
                            <p className='text-muted small mb-0'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card h-100 shadow-sw  p-2 '>
                        <img src="https://images.unsplash.com/photo-1769738360873-3ba6cac0b308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwcGxhbmluaHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='card-img-top' />
                        <div className='card-body '>
                            <h6 className='fw-bold mb-1 '>Creative Boreads </h6>
                            <p className='text-muted small mb-0'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='card h-100 shadow-sw  p-2 '>
                        <img src="https://plus.unsplash.com/premium_photo-1723773736797-8d05f469c6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='card-img-top' />
                        <div className='card-body '>
                            <h6 className='fw-bold mb-1 '>Collaboration </h6>
                            <p className='text-muted small mb-0'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='card h-100 shadow-sw  p-2 '>
                        <img src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUl8ZW58MHx8MHx8fDA%3D" alt="" className='card-img-top' />
                        <div className='card-body '>
                            <h6 className='fw-bold mb-1 '>AI Support </h6>
                            <p className='text-muted small mb-0'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
