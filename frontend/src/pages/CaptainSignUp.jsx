import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain,setCaptain } = React.useContext(CaptainDataContext)

  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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

          <h3 className="text-[5vw] font-semibold mb-[4vw]">What&apos;s your Name ?</h3>
          <div className="flex gap-[2vw]">
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder="First Name" 
                className="bg-[#eeee] w-1/2 mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md"
            />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required placeholder="Last Name" 
              className="bg-[#eeee] w-1/2 mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md"
          />
          </div>

          <h3 className="text-[5vw] font-semibold mb-[4vw]">What&apos;s your Email ?</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required name="email" placeholder="email@example.com"
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md"
          />
          <h3 className="text-[5vw] font-semibold mb-[4vw]">Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="*******" 
              className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md"
          />

          <h3 className="text-[5vw] font-semibold mb-[4vw]">Vehicle Details</h3>
          <div className="flex gap-[3vw] mb-[4vw]">
            <input type="text" required className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md" placeholder="Vehicle Color" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)}/>
            <input type="text" required className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md" placeholder="Vehicle Plate" value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} />
          </div>
          <div className="flex gap-[3vw] mb-[4vw]">
            <input type="number" required className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md" placeholder="Vehicle Capacity" value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)}/>
            <select required className="bg-[#eeee] w-full mb-[4vw] outline-none p-[3vw] border placeholder:text-base rounded-md" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
              <option value="" disabled>
                Choose Vehicle
              </option>
              <option value="car">Car</option>
              <option value="moto">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="bg-black text-white w-full text-center font-semibold rounded-md my-[3vw] py-[2vw]">Create Account</button>
          <p className="text-center font-medium">Have an account already? <Link to="/captain-login" className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex items-center justify-center text-white w-full text-center font-semibold rounded-md py-[2vw]">Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainSignUp
