import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => {props.setWaitingForDriver(false)}} className='absolute top-0 font-bold left-1/2'><i className=" text-xl ri-arrow-down-wide-fill"></i></h5>
      <div className='flex items-center justify-between my-[4vw]'>
        <h2 className='font-bold text-[5vw]'>Meet at the Pickup Location in </h2>
        <button className='bg-green-800 font-bold text-white p-[3vw]'>2 mins</button>
      </div>
      <div className='flex items-center justify-between w-full my-[5vw]'>
        <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
        <div className="text-right">
            <h2 className='font-semibold text-[4vw]'>{props.ride?.captain.fullName.firstName + " " + props.ride?.captain.fullName.lastName}</h2>
            <h3 className='font-bold text-[5vw] leading-[5vw]'>{props.ride?.captain.vehicle.plate}</h3>
            <h4 className='font-semibold text-gray-500 text-[3.5vw]'>Maruti Swift</h4>
            <h3 className="font-bold bg-[#eee] mt-[3vw] rounded-md inline px-[3vw]">{props.ride?.otp}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full mx-[2vw]">
            <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                    <h3 className="font-bold text-[4.5vw]">562/21A</h3>
                    <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.ride?.pickup}</p>
                </div>
            </div>
            <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className="font-bold text-[4.5vw]">262/21C</h3>
                    <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.ride?.destination}</p>
                </div>
            </div>
            <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
                <i className="text-lg ri-money-rupee-circle-line"></i>
                <div>
                    <h3 className="font-bold text-[4.5vw]">${props.ride?.fare}</h3>
                    <p className='text-gray-400 font-semibold text-[3.5vw]'>Payment Mode: Cash</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
