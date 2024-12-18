import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext }  from '../context/UserContext';

const UserSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const {user,setUser} = React.useContext(UserDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  } 

  return (
    <div className="p-[5vw] h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img className="w-[20vw] ml-[.5vw] mb-[10vw] lg:w-[10vw] lg:ml-[5vw]"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="logo"/>
        </Link>
        <form onSubmit={(e) => submitHandler(e)}>

          <h3 className="text-[5vw] font-medium mb-[4vw]">What&apos;s your Name ?</h3>
          <div className="flex gap-[2vw]">
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder="First Name" 
                className="bg-[#eeee] w-1/2 mb-[4vw] outline-none p-[3vw]  border placeholder:text-base rounded-md"
            />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required placeholder="Last Name" 
              className="bg-[#eeee] w-1/2 mb-[4vw] outline-none p-[3vw]  border placeholder:text-base rounded-md"
          />
          </div>

          <h3 className="text-[5vw] font-medium mb-[4vw]">What&apos;s your Email ?</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required name="email" placeholder="email@example.com"
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base rounded-md"
          />
          <h3 className="text-[5vw] font-semibold mb-[4vw]">Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="*******" 
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw]  border placeholder:text-base rounded-md"
          />
          <button className="bg-black text-white w-full text-center font-semibold rounded-md my-[3vw] py-[2vw]">Create Account</button>
          <p className="text-center">Have an account already?<Link to="/login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#d5622d] flex items-center justify-center text-white w-full text-center font-semibold rounded-md py-[2vw]">Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignUp
