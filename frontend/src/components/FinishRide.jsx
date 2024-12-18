import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {

  const navigate = useNavigate()

  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, 
      {
        rideId: props.ride._id
      }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (response.status === 200) {
        navigate('/captain-home')
    }

}

  return (
    <div>
      <h5 onClick={() => {props.setFinishRidePanel(false)}}
        className='absolute top-5 font-bold right-6 text-[5vw]'>
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-bold text-[6vw] mb-[3vw] pl-[3vw] pt-[3vw]">Finish Ride.</h3>
      <div className='flex items-center justify-between bg-gray-200 p-[3vw] rounded-lg'>
        <div className='flex items-center gap-[2vw]'>
            <img className="w-20 rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.-3LM7jMY38D_UGeyta0DXgHaHa&pid=Api&P=0&h=180" alt="profile" />
            <h4 className='font-bold text-[4.5vw]'>{props.ride?.user.fullName.firstName + " " + props.ride?.user.fullName.lastName}</h4>
        </div>
        <h3 className='font-semibold text-[5vw] pr-[3vw]'>2.2 km</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full my-[3vw] mx-[2vw]">
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[4vw]'>
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">562/21A</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.ride?.pickup}</p>
              </div>
          </div>
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[4vw]'>
              <i className='text-lg ri-map-pin-2-fill'></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">262/21C</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.ride?.destination}</p>
              </div>
          </div>
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[4vw]'>
              <i className="text-lg ri-money-rupee-circle-line"></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">${props.ride?.fare}</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>Payment Mode: Cash</p>
              </div>
          </div>
        </div>
        <div className='w-full'>
            <button onClick={endRide} className="bg-green-500 py-[2vw] flex justify-center text-white font-bold text-[5vw] w-full rounded-xl">Ride Completed!</button>
            <p className='text-gray-700 text-[3.4vw] my-[2vw] font-semibold'>Click on Complete Ride when payment is successfully done.</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
