import React from 'react'

const Login = () => {
    return (
        <div className='sign-in-main'>
            <div className="main">
                <form>
                    <h3 className='text-center mb-4'>Login </h3>
                    <input type="text" className='form-control form-input my-3 py-2' placeholder='Username' />
                    <input type="text" className='form-control form-input my-3 py-2' placeholder='Password' />
                    <button className='btn btn-primary submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
