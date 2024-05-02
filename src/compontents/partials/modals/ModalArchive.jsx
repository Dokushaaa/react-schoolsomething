import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { LiaTimesSolid, LiaTrashAltSolid, LiaTrashSolid } from 'react-icons/lia'
import ModalWrapper from './ModalWrapper'
import { PiArchive } from 'react-icons/pi'

const ModalArchive = ({position, setTooltipArchive}) => {
  const handleCloseArchive = () => setTooltipArchive(false);
  return (
        <>
            <ModalWrapper position={position}>
            <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-warning text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Confirm</h4>
            <button onClick={handleCloseArchive}><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md  bg-secondary">
            <div className='flex gap-4 items-center '>
            <PiArchive className='text-4xl text-warning mb-3'/>
                <div>
                    <h2 className='mb-2'>Archiving Record</h2>
                    <p className='mb-5'>Are you sure you want to Archive this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn--warning btn-form w-1/4'>Archive</button>
                <button onClick={handleCloseArchive} className='btn btn--cancel btn-form w-1/4'>Cancel</button>
              </div>
          </div>
        </div>
    </ModalWrapper>
        </>
  )
}

export default ModalArchive