import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>
      <div className='flex items-center p-[3vw] justify-between w-full'>
            <div className="flex items-center">
              <img className="w-20" src="https://tse3.mm.bing.net/th?id=OIP.-3LM7jMY38D_UGeyta0DXgHaHa&pid=Api&P=0&h=180" alt="profile" />
              <h4 className='font-bold text-[4.5vw]'>{captain.fullName.firstName + " " + captain.fullName.lastName}</h4>
            </div>
            <div>
              <h3 className='text-[5vw] font-bold'>$373.20</h3>
              <p className='text-gray-500 font-semibold text-[4vw]'>Earned</p>
            </div>
          </div>
          <div className='w-full bg-gray-100 rounded-lg px-[5vw] py-[3vw] flex items-center justify-between'>
            <div className='text-center'>
              <i className='text-2xl ri-timer-2-line'></i>
              <h1 className='font-medium text-[4.5vw]'>10.2</h1>
              <p className='text-gray-600 text-[4.5vw] font-semibold'>Hours</p>
            </div>
            <div className='text-center'>
              <i className='text-2xl ri-speed-up-fill'></i>
              <h1 className='font-medium text-[4.5vw]'>20.6</h1>
              <p className='text-gray-600 text-[4.5vw] font-semibold'>Distance (km)</p>
            </div>
            <div className='text-center'>
              <i className='text-2xl ri-booklet-line'></i>
              <h1 className='font-medium text-[4.5vw]'>5</h1>
              <p className='text-gray-600 text-[4.5vw] font-semibold'>Notes</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
