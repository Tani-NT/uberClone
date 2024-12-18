import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {user, setUser} = React.useContext(UserDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData,
        { headers: { "Content-Type": "application/json" } } 
      );
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  
    setEmail("");
    setPassword("");
  };
  

  return (
    <div className="p-[5vw] h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img className="w-[20vw] ml-[.5vw] mb-[10vw] lg:w-[10vw] lg:ml-[5vw]"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="logo"/>
        </Link>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-[5vw] font-bold mb-[4vw]">What&apos;s your email</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required name="email" placeholder="email@example.com"
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base"
          />
          <h3 className="text-[5vw] font-bold mb-[4vw]">Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="*******" 
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base"
          />
          <button className="bg-black text-white w-full text-center font-semibold rounded-md my-[3vw] py-[2vw]">Login</button>
          <p className="text-center font-semibold">New here ? <Link to="/signup" className="text-blue-600">Create New Account</Link></p>
        </form>
      </div>
      <div>
        <p className="text-[3.2vw]">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided</p>
      </div>
    </div>
  )
}

export default UserLogin
