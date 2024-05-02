import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { BiCheckCircle } from "react-icons/bi";

const ModalValidate = ({position, setTooltipHistory}) => {
  const handleCloseHistory = () => {setTooltipHistory(false)}
  return (
    <>
        <ModalWrapper position={position}>
        <div className="modal-main max-w-[450px] w-full text-center">
        <div className="modal-header bg-info text-white flex justify-between items-center py-4 px-2 rounded-t-md">
          <h4 className='mb-0 p-2 text-white'>Information</h4>
          <button onClick={handleCloseHistory}><LiaTimesSolid/></button>
        </div>
        <div className="modal-body bg-secondary rounded-b-md p-5 mb-3 text-center">
        <BiCheckCircle className='text-4xl mx-auto text-info mb-5' />
          <h2 className='mb-5'>Validation</h2>
          <p  className='mb-5'>Record Already Exists!</p>
          <button onClick={handleCloseHistory} className='btn btn--info btn-form'>Okay!</button>
        </div>
        </div>
    </ModalWrapper>
    </>
  )
}

export default ModalValidate