import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setConfirmRidePanel(false)}} 
        className='absolute top-5 font-bold right-6 text-[5vw]'>
            <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-bold text-[6vw] mb-[3vw]">Confirm Your Ride..</h3>
      <div className="flex flex-col items-center justify-center">
        <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
        <div className="w-full mx-[2vw]">
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">562/21A</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.pickup}</p>
              </div>
          </div>
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
              <i className='text-lg ri-map-pin-2-fill'></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">262/21C</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>{props.destination}</p>
              </div>
          </div>
          <div className='flex items-center px-[4vw] mb-[3vw] w-full border-gray-300 border-b-2 py-[1.5vw] gap-[3vw]'>
              <i className="text-lg ri-money-rupee-circle-line"></i>
              <div>
                  <h3 className="font-bold text-[4.5vw]">${props.fare[props.vehicleType]}</h3>
                  <p className='text-gray-400 font-semibold text-[3.5vw]'>Payment Mode: Cash</p>
              </div>
          </div>
        </div>
        <button onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
          props.createRide()
        }} className="bg-green-500 text-white py-[2vw] font-bold text-[5vw] w-full rounded-xl">Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide
