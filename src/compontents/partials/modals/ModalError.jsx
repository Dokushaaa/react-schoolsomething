import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { BiErrorCircle } from "react-icons/bi";

const ModalError = ({position, setTooltipError}) => {
  const handleCloseError = () => {setTooltipError(false)};
  return (
    <>
    <ModalWrapper position={position}>
        <div className="modal-main max-w-[450px] w-full text-center">
        <div className="modal-header bg-alert text-white flex justify-between items-center py-4 px-2 rounded-t-md">
          <h4 className='mb-0  text-white p-2'>Urgent Alert!</h4>
          <button onClick={handleCloseError}><LiaTimesSolid/></button>
        </div>
        <div className="modal-body bg-secondary rounded-b-md p-5 mb-3 text-center">
        <BiErrorCircle className='text-4xl mx-auto text-alert mb-5' />
          <h2 className='mb-5'>Server Error</h2>
          <p  className='mb-5'>Something went wrong</p>
          <button onClick={handleCloseError} className='btn btn--alert btn-form'>Okay!</button>
        </div>
        </div>
    </ModalWrapper>
    </>
  )
}

export default ModalError