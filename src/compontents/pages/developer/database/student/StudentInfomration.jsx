import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashSolid } from 'react-icons/lia'

const StudentInformation = ({showInfo, itemData, itemState, setShowInfo}) => {
  const handleClose = () => setShowInfo(false);
  const initVal = {
    student_name: itemData ? itemData.student_name : "",
    student_class: itemData ? itemData.student_class : "",
    student_age: itemData ? itemData.student_age : "",
    student_gender: itemData ? itemData.student_gender : "",
    student_email: itemData ? itemData.student_email : "",
  };
  // console.log(itemState);
  // console.log(itemData);
  return (
    <>
      <div  initialValues={initVal} className={`information absolute transition-all border-l border-line h-[calc(100vh-65px)] w-1/4 ${showInfo ? "right-0" : "-right-1/4"}`}>
              <button onClick={handleClose} className='absolute top-0 right-0 size-10 grid place-content-center bg-secondary text-content'><FaTimes/></button>
              <div className='p-8'>
              <div className="text-center mb-8">
                <img src="https://via.placeholder.com/100x100" className='size-[100px] mx-auto object-cover rounded-full mb-4' alt="" />
                <h3 className='mb-1'>{initVal.student_name}</h3>
                <div className="flex flex-col ">
                <small className='opacity-60  text-base'>{initVal.student_class}</small>
                <small className='opacity-60 text-xs'>{initVal.student_email}</small>
                </div>
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
                  <p className='text-xs'>{initVal.student_age}</p>
                </div>
                <div className="info-box">
                  <h4>Gender</h4>
                  <p className='text-xs'>{initVal.student_gender}</p>
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

export default StudentInformation