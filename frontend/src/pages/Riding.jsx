import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

const Riding = () => {

    const location = useLocation();
    const { ride } = location.state || {} 
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    useEffect(() => {
        socket.on('ride-ended', () => {
            navigate('/home')
        })
    })

  return (
    <div className="h-screen">
        <Link to="/captain-home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>
        <div className="h-1/2">
            <img className='w-full h-full object-right object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
        </div>

        <div className='h-1/2 p-[2vw]'>
            <div className='flex items-center justify-between w-full my-[5vw]'>
            <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
            <div className="text-right">
                <h2 className='font-semibold text-[4vw]'>{ride?.captain.fullName.firstName + " " + ride?.captain.fullName.lastName}</h2>
                <h3 className='font-bold text-[5vw] leading-[5vw]'>{ride?.captain.vehicle.plate}</h3>
                <h4 className='font-semibold text-gray-500 text-[3.5vw]'>Maruti Swift</h4>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="w-full mx-[2vw]">
                <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div>
                        <h3 className="font-bold text-[4.5vw]">262/21C</h3>
                        <p className='text-gray-400 font-semibold text-[3.5vw]'>{ride?.destination}</p>
                    </div>
                </div>
                <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
                    <i className="text-lg ri-money-rupee-circle-line"></i>
                    <div>
                        <h3 className="font-bold text-[4.5vw]">${ride?.fare}</h3>
                        <p className='text-gray-400 font-semibold text-[3.5vw]'>Payment Mode: Cash</p>
                    </div>
                </div>
            </div>
        </div>
        {/* { ride && (
            <div>
                <h2>Ride ID: {ride.id}</h2>
                <p>Pickup Location: {ride.pickup} </p>
                <p>Destination Location: {ride.destination} </p>
            </div>
        ) } */}
        <button className="bg-green-500 text-white mt-[4vw] py-[2vw] font-bold text-[5vw] w-full rounded-xl">Make Payment</button>
        </div>
    </div>
  )
}

export default Riding