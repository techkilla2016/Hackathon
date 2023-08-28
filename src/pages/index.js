import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router';

const Login = ({ baseURL }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [cookies, setCookies] = useCookies()
  useEffect(() => {
    if (cookies?.auth) {
      router.push('/dashbord');
    }
  }, [])
  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/auth`, formData)
      if (res?.data?.status) {
        setCookies('auth', res?.data?.token)
        router.push('/dashbord');
      }
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div className='sign-in-main'>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <h3 className='text-center mb-4'>Login </h3>
          <input type="text" className='form-control form-input my-3 py-2' name='username' value={formData?.username} onChange={handleChange} placeholder='username' />
          <input type="text" className='form-control form-input my-3 py-2' name='password' value={formData?.password} onChange={handleChange} placeholder='password' />
          <button className='btn btn-primary submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login

export const getStaticProps = async () => {
  return {
    props: {
      baseURL: process.env.SERVER,
    }
  }
}