import React from 'react'
import { PiArchive } from 'react-icons/pi'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashSolid } from 'react-icons/lia'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalValidate from '../../../../partials/modals/ModalValidate'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import ModalError from '../../../../partials/modals/ModalError'
import ModalArchive from '../../../../partials/modals/ModalArchive';


const TeacherTable = ({setShowInfo, showInfo, isLoading, teacher}) => {
    const handleShowInfo =  () => {setShowInfo(!showInfo)};
    
    let counter =1;
    
    // const tooltipConfirm event listeners
    const [tooltipConfirm, setTooltipConfirm] = React.useState(false);
    const handleToolConfirm = () => {setTooltipConfirm(!tooltipConfirm)};
    // const tooltipArchive event listeners
    const [tooltipArchive, setTooltipArchive] = React.useState(false);
    const handleToolArchive = () => {setTooltipArchive(!tooltipArchive)};
    // const tooltipHistory event listeners
    const [tooltipHistory, setTooltipHistory] = React.useState(false);
    const handleToolHistory = () => {setTooltipHistory(!tooltipHistory)};
    // const tooltipDelete event listeners
    const [tooltipDelete, setTooltipDelete] = React.useState(false);
    const handleToolDelete = () => {setTooltipDelete(!tooltipDelete)};
    // const tooltipError event listeners
    const [tooltipError, setTooltipError] = React.useState(false);
    const handleToolError = () => {setTooltipError(!tooltipError)};

  return (
    <>
       <div className="table-wrapper relative">
        {/* <SpinnerFetching /> */}
              <table  width="100%">
                <thead>
                <tr>
                  <th className='w-[20px]'>#</th>
                  <th className='w-[150px]'>Name</th>
                  <th className='w-[80px]'>Class</th>
                  <th className='w-[80px]'>Age</th>
                  <th className='w-[80px]'>Gender</th>
                  <th className='w-[80px]'>Email</th>
                  <th className='w-[100px]'>Action</th>
                </tr>
              </thead>
                <tbody>
                {isLoading && ( 
                <tr>
                    <td colSpan={9}>
                        <TableLoader count="20" cols="4"/>
                    </td>
                </tr>)
                }

                {teacher?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}
             
                {teacher?.data.map((itemTeacher, keyTeacher) => (
                        <tr  onDoubleClick={handleShowInfo}>
                            <td>{counter++}</td>
                            <td>{itemTeacher.teacher_name}</td>
                            <td>{itemTeacher.teacher_class}</td>
                            <td>{itemTeacher.teacher_age}</td>
                            <td>Male</td>
                            <td>robert.fox@gmail.com</td>
                            <td className='table-action'>
                                <ul>
                                  {itemTeacher.teacher_us_active ? (     
                                  <>
                                  <li><button className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                  <li><button onClick={handleToolArchive} className="tooltip" data-tooltip="Archive"><PiArchive/></button></li> </>
                                ) : (
                                  <>
                                  <li><button onClick={handleToolHistory}  className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                                  <li><button onClick={handleToolDelete} className="tooltip" data-tooltip="Delete"><LiaTrashSolid/></button></li> </>)}

                                </ul>
                            </td>
                        </tr>
                    ))              
                }
                </tbody>
              </table>
            </div>
    {tooltipConfirm && <ModalConfirm position={"center"} setTooltipConfirm={setTooltipConfirm} /> }
    {tooltipArchive && <ModalArchive position={"center"} setTooltipArchive={setTooltipArchive} /> }
    {tooltipHistory && <ModalValidate position={"center"} setTooltipHistory={setTooltipHistory} /> }
    {tooltipError && <ModalError position={"center"} setTooltipError={setTooltipError} /> }
    {tooltipDelete && <ModalDelete position={"center"} setTooltipDelete={setTooltipDelete} /> }
            
    </>
  )
}

export default TeacherTable