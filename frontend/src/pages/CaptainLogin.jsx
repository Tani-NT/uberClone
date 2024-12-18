import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if(response.status === 200){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  } 

  return (
    <div className="p-[5vw] h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img className="w-[20vw] ml-[.5vw] mb-[10vw] lg:w-[10vw] lg:ml-[5vw]"
            src="https://logodix.com/logo/81070.png"
            alt="logo"/>
        </Link>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-[5vw] font-semibold mb-[4vw]">What&apos;s your email</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required name="email" placeholder="email@example.com"
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base"
          />
          <h3 className="text-[5vw] font-semibold mb-[4vw]">Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="*******" 
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base"
          />
          <button className="bg-black text-white w-full text-center font-semibold rounded-md my-[3vw] py-[2vw]">Login</button>
          <p className="text-center font-semibold">New here ? <Link to="/captain-signup" className="text-blue-600">Create Captain Account</Link></p>
        </form>
      </div>
      <div>
        <p className="text-[3.5vw] font-medium">This site is protected by reCAPTCHA and the <u>Google Privacy Policy</u> and Terms of Service apply</p>
      </div>
    </div>
  )
}

export default CaptainLogin
