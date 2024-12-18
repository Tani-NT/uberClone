import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainHome = () => {

  const [popUpPanel, setPopUpPanel] = useState(false)
  const [confirmPopUpPanel, setConfirmPopUpPanel] = useState(false)
  const [ride,setRide] = useState(null)

  const popUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id })

    const updateLocation = () => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location:{
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()
    // return () => clearInterval(locationInterval)  

    socket.on('new-ride', (data) => {
      console.log(data)
      setRide(data)
      setPopUpPanel(true)
    })

  })

  async function confirmRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId: ride._id,
      captainId: captain._id,
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setConfirmPopUpPanel(true)
    setPopUpPanel(false)
  }
 
  useGSAP(function(){
    if(popUpPanel){
      gsap.to(popUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(popUpPanelRef.current, {
        transform:'translateY(100%)' 
      })
    }
  }, [ popUpPanel ])

  useGSAP(function(){
    if(confirmPopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform:'translateY(100%)' 
      })
    }
  }, [ confirmPopUpPanel ])
  
  return (
    <div className="h-screen relative overflow-hidden">
      <div className='fixed flex items-center justify-between top-0 w-full p-[3vw]'>
        <img className='w-[20vw]' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <Link to="/captain-login" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className="h-3/5">
          <img className='w-full h-full object-right object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
      </div>

      <div className='h-2/5 p-[2vw]'>
        <CaptainDetails />
      </div>
      <div ref={popUpPanelRef} className='fixed z-10 translate-y-full bg-white bottom-0 p-[2vw] w-full'>
        <RidePopUp 
        ride={ride}
        confirmRide={confirmRide}
        setPopUpPanel={setPopUpPanel} 
        setConfirmPopUpPanel={setConfirmPopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className='h-screen fixed z-10 translate-y-full bg-white bottom-0 p-[2vw] w-full'>
        <ConfirmRidePopUp 
        ride={ride}
        confirmRide={confirmRide}
        setConfirmPopUpPanel={setConfirmPopUpPanel} 
        setPopUpPanel={setPopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
