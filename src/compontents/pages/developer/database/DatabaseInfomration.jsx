import React from 'react'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashSolid } from 'react-icons/lia'

const DatabaseInfomration = ({showInfo}) => {
    
  return (
    <>
      <div className={`information absolute transition-all border-l border-line h-[calc(100vh-65px)] w-1/4 ${showInfo ? "right-0" : "-right-1/4"}`}>
              <div className='p-8'>
              <div className="text-center mb-8">
                <img src="https://via.placeholder.com/100x100" className='size-[100px] mx-auto object-cover rounded-full mb-4' alt="" />
                <h3 className='mb-1'>Robert Fox</h3>
                <small className='opacity-60 '>Science 7 Student</small>
                <ul className='flex gap-5 mt-5 justify-center'>
                  <li><button data-tooltip="Account" className='tooltip text-2xl'><LiaKeySolid/></button></li>
                  <li><button data-tooltip="Email" className='tooltip text-2xl'><LiaEnvelope/></button></li>
                </ul>
              </div>
              <h4 className='mb-3'>About</h4>
              <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique obcaecati incidunt laboriosam repudiandae, accusantium ipsam!</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="info-box">
                  <h4>Age</h4>
                  <p className='text-xs'>7</p>
                </div>
                <div className="info-box">
                  <h4>Gender</h4>
                  <p className='text-xs'>Autobots</p>
                </div>
                <div className="info-box">
                  <h4>Birthday</h4>
                  <p className='text-xs'>Febraury 31, 2000</p>
                </div>
                <div className="info-box">
                  <h4>Address</h4>
                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}

export default DatabaseInfomration