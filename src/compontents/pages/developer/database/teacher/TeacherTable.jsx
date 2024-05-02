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


const TeacherTable = ({setShowInfo, showInfo}) => {
    const handleShowInfo =  () => {setShowInfo(!showInfo)};
    
    
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
                  <th className='w-[80px]'>Occupation</th>
                  <th className='w-[80px]'>Major in</th>
                  <th className='w-[80px]'>Gender</th>
                  <th className='w-[80px]'>Email</th>
                  <th className='w-[100px]'>Action</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                  <td colSpan={9}>`
                  <TableLoader count="28" cols="7" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={9}><NoData/></td>
                </tr>
                <tr onDoubleClick={handleShowInfo}>
                    <td>1</td>
                    <td>Robert Fox</td>
                    <td>Science 4</td>
                    <td>7</td>
                    <td>Male</td>
                    <td>robertfox@gmail.com</td>
                    <td className='table-action'>
                      <ul className='table-action-menu'>
                      <li><button  className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                      <li><button onClick={handleToolArchive} className="tooltip" data-tooltip="Archive"><PiArchive/></button></li>
                      <li><button onClick={handleToolHistory}  className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                      <li><button onClick={handleToolDelete} className="tooltip" data-tooltip="Delete"><LiaTrashSolid/></button></li>
                    </ul>
                    </td>
                </tr>
                </tbody>`
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