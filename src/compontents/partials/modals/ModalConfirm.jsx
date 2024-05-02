import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { LiaTimesSolid, LiaTrashAltSolid, LiaTrashSolid } from 'react-icons/lia'
import ModalWrapper from './ModalWrapper'
import { PiArchive } from 'react-icons/pi'
import { FaCheckCircle } from "react-icons/fa";

const ModalConfirm = ({position, setTooltipConfirm}) => {
  const handleCloseConfirm = () => setTooltipConfirm(false);
  return (
        <>
            <ModalWrapper position={position}>
            <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-accent text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Confirm</h4>
            <button onClick={handleCloseConfirm}><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md  bg-secondary">
            <div className='flex gap-4 items-center '>
            <FaCheckCircle className='text-4xl text-accent mb-3'/>
                <div>
                    <h2 className='mb-2'>Save this Record?</h2>
                    <p className='mb-5'>Are you sure you want to Save this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn--accent btn-form w-1/4'>Save</button>
                <button onClick={handleCloseConfirm} className='btn btn--cancel btn-form w-1/4'>Cancel</button>
              </div>
          </div>
        </div>
    </ModalWrapper>
        </>
  )
}

export default ModalConfirm