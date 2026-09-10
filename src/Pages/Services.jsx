import React from 'react'

const Services = () => {
    return (
        <div>
            <section className='py-5 text-center text-white position-relative' style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661484821938-c9f8b585bd21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmljZXNzfGVufDB8fDB8fHww')",
                backgroundSize:"cover",
                backgroundPosition:"center",
                height:"350px",
                filter:"brightness(80%)",
             }}>
                <h1 className='fw-bold display-6 mt-5'>OUR SERVICES</h1>
             </section>
             <div className='container position-relative' style={{marginTop:"-120px"}}>
                <div className='row justify-content-center'>
                    {/* card 1 */}
                    <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-bicycle fs-1 text-success"></i>
                            <h5 className='fw-bold mt-3 '>WorkOuts</h5>
                            <p className='text-muted ' style={{fontSize:"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum?</p>
                            <a href="/" className='fw-bold text-success'>MORE</a>
                        </div>
                    </div>
                    {/* card 2 */}
                     <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-people fs-1 text-success"></i>
                            
                            <h5 className='fw-bold mt-3 '>Community</h5>
                            <p className='text-muted ' style={{fontSize:"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum?</p>
                            <a href="/" className='fw-bold text-success'>MORE</a>
                        </div>
                    </div>
                    {/* card 3 */}
                       <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-award fs-1 text-success"></i>
                            
                            <h5 className='fw-bold mt-3 '>Mamership</h5>
                            <p className='text-muted ' style={{fontSize:"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum?</p>
                            <a href="/" className='fw-bold text-success'>MORE</a>
                        </div>
                    </div>
                    {/* card 4 */}
                       <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-calendar-minus-fill fs-1 text-success"></i>
                            
                            <h5 className='fw-bold mt-3 '>Evenets</h5>
                            <p className='text-muted ' style={{fontSize:"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum?</p>
                            <a href="/" className='fw-bold text-success'>MORE</a>
                        </div>
                    </div>
                </div>
             </div>

        </div>
    )
}

export default Services
