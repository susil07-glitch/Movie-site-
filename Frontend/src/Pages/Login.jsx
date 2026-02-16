import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contex/UserContex'
import axios from 'axios'
import NavbarWithoutUser from '../Component/Navbar/NavbarWithoutUser'
import Footter from '../Component/Footer/Footter'

const Login = () => {
  const navigate = useNavigate()
  
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')

  }

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required')
      return false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return false
    }
    
    return true
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    try {
      const response = await axios.post('https://movie-site-backend-809o.onrender.com/api/auth/login',formData
  );

  const data = response.data;  

  console.log("Login success:", data);

  // Store token
  localStorage.setItem('token', data.token);


  if(response.status === 200){
    alert("Login Successful")
    navigate('/home')
  }

  if(response.status === 400){
    alert("Login Filed , Please check your Credential")
    navigate('/signup ')
  }


} catch (err) {
  console.log("Full error object:", err);

  if (err.response && err.response.data) {
    setError(err.response.data.message || "Login failed");
  } else {
    setError("Server not responding. Please try again.");
  }
}

    
    finally {
      setLoading(false)
    }
  }

  return (
    
    <div className='bg-amber-700 min-h-screen'>
      <NavbarWithoutUser/>
      <div className="py-20">
        <div className="flex h-full items-center justify-center">
          <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4 w-full max-w-md mx-4">
            <div className="flex h-full flex-col justify-center gap-4 p-6 w-full">
              <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                <form className="flex flex-col gap-4 pb-4" onSubmit={handleLogin}>
                  <h1 className="mb-4 text-2xl font-bold dark:text-white">Login</h1>
                  
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <div className="mb-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">
                        Email:
                      </label>
                    </div>
                    <div className="flex w-full rounded-lg pt-1">
                      <div className="relative w-full">
                        <input
                          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={loading}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="flex w-full rounded-lg pt-1 relative">
                      <div className="relative w-full">
                        <input
                          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg pr-10"
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          disabled={loading}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-gray-600 dark:text-gray-400"
                          disabled={loading}
                        >
                          {showPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600 text-sm">
                      Forgot password?
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                        {loading ? 'Logging in...' : 'Login'}
                      </span>
                    </button>
                    
                    <button
                      type="button"
                      disabled={loading}
                      className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                          </path>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                          </path>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                          </path>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                          </path>
                        </svg>
                        Sign in with Google
                      </span>
                    </button>
                    
                    <button
                      type="button"
                      disabled={loading}
                      className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                          </path>
                        </svg>
                        Sign in with Facebook
                      </span>
                    </button>
                  </div>
                </form>
                
                <div className="min-w-[270px]">
                  <div className="mt-4 text-center dark:text-gray-200">
                    New user?
                    <a className="text-blue-500 underline hover:text-blue-600 ml-1" href="/signup">
                      Create account here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footter></Footter>
    </div>
  )
}

export default Login
