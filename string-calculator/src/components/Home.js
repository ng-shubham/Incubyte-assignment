import React from 'react'

function Home() {
    return (
        <div className='row'>
            <div className='offset-md-4 col-md-4 px-5'>
                <h3 className='my-3'>String Calculator</h3>
                <input type='text' className='form-control mb-3' placeholder='Enter String' />
                <button className='btn btn-primary w-100'>Submit String</button>  
                <div class="alert alert-success mt-2" role="alert">
                    {"String output"}
                </div>
            </div>
        </div>
    )
}

export default Home