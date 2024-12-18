import React from 'react'

const VehiclePanel = (props) => {
  const handleVehicleSelect = (type) => {
    props.selectVehicle(type)
  }
  return (
    <div>
      <h5 onClick={() => {props.setVehiclePanel(false)}} className='absolute top-5 font-bold right-6 text-[5vw]'><i className="ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-[6vw] font-semibold mb-[3vw]'>Choose a Vehicle</h3>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
          handleVehicleSelect('car')
          }} className='w-full active:border-black mb-[3vw] rounded-xl border-2 p-[2vw] flex items-center justify-between'>
          <img className='h-[10vh] w-[30vw] object-cover' src="https://tse3.mm.bing.net/th?id=OIP.kbb7G3euKW4xTFJGMsCGCwHaEK&pid=Api&P=0&h=180" alt="car" />
          <div className='w-1/2'>
            <h4 className='text-[4.5vw] font-semibold'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-semibold text-[3.8vw]'>2 mins away</h5>
            <p className='text-zinc-600 font-medium text-[3.5vw]'>Affordable, compact rides</p>
          </div>
          <h2 className='text-[5vw] font-bold'>${props.fare.car}</h2>
        </div>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
          handleVehicleSelect('auto')
          }} className='w-full active:border-black mb-[3vw] rounded-xl border-2 p-[2vw] flex items-center justify-between'>
          <img className='h-[10vh] w-[30vw] mr-[2vw] object-cover' src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180" alt="auto" />
          <div className='w-1/2'>
            <h4 className='text-[4.5vw] font-semibold'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-semibold text-[3.8vw]'>1 mins away</h5>
            <p className='text-zinc-600 font-medium text-[3.5vw]'>Affordable, auto rides</p>
          </div>
          <h2 className='text-[5vw] font-bold'>${props.fare.auto}</h2>
        </div>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
          handleVehicleSelect('car')
          }} className='w-full active:border-black mb-[3vw] rounded-xl border-2 p-[2vw] flex items-center justify-between'>
          <img className='h-[10vh] w-[30vw] object-cover' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
          <div className='w-1/2 '>
            <h4 className='text-[4.5vw] font-semibold'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-semibold text-[3.8vw]'>2 mins away</h5>
            <p className='text-zinc-600 font-medium text-[3.5vw]'>Affordable, compact rides</p>
          </div>
          <h2 className='text-[5vw] font-bold'>${props.fare.car}</h2>
        </div>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
          handleVehicleSelect('moto')
        }} className='w-full active:border-black mb-[3vw] rounded-xl border-2 p-[2vw] flex items-center justify-between'>
          <img className='h-[10vh] w-[30vw] mr-[2vw] object-cover' src="https://tse4.mm.bing.net/th?id=OIP.znY96OhfmQ9RecEw45FS_AHaE7&pid=Api&P=0&h=180" alt="motorcycle" />
          <div className='w-1/2 '>
            <h4 className='text-[4.5vw] font-semibold'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-semibold text-[3.8vw]'>3 mins away</h5>
            <p className='text-zinc-600 font-medium text-[3.5vw]'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-[5vw] font-bold'>${props.fare.moto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
