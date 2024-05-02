import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid, LiaTrashAltSolid } from 'react-icons/lia'

const ModalDelete = ({position, setTooltipDelete}) => {
  const handleCloseDelete = () =>  setTooltipDelete(false);
  return (
    <>
    <ModalWrapper position={position}>
            <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-hazard text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Delete</h4>
            <button onClick={handleCloseDelete}><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md  bg-secondary">
            <div className='flex gap-4 items-center '>
                <LiaTrashAltSolid className='text-4xl text-hazard mb-3'/>
                <div>
                    <h2 className='mb-2'>Removing Record</h2>
                    <p className='mb-5'>Are you sure you want to trash this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn-disable btn-form w-1/4'>Delete</button>
                <button onClick={handleCloseDelete} className='btn btn--cancel btn-form w-1/4'>Cancel</button>
              </div>
          </div>
        </div>
    </ModalWrapper>
    </>
  )
}

export default ModalDelete