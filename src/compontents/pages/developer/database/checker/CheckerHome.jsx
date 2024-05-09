import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'



const CheckerHome = () => {
    const [showInfo, setShowInfo] = React.useState(false);
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
    <section className="flex overflow-x-hidden">
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className="flex relative">
          <div
            className={`main-wrapper transition-all px-4 py-3 ${
              showInfo ? "w-3/4" : "w-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <h1 className="leading-none mb-0">Database</h1>
              <form action="" className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Student"
                  className="p-1 px-3 pl-10 bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20 text-content"
                />
                <CiSearch className="absolute ty-a left-2 z-[1] text-white text-2xl opacity-20" />
              </form>
            </div>
            <div className="tab flex justify-between items-center my-8 border-b border-line ">
              <ul className='flex'>
              <li className='tab-link '><Link to="/database/student">Student</Link></li>
                <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                <li className='tab-link danger'><Link to="/database/checker">Checker</Link></li>
              </ul>
                <button className='btn btn--accent  flex flex-row items-center gap-2'><Link target="_blank" to="http://localhost/phpmyadmin/index.php?route=/database/structure&db=react_school">
                  SQL Database LINK</Link></button>
            </div>
            <ul className="flex flex-col gap-5">
                <li><h1>As of now this is not functional Except for the database link</h1></li>
                <li><button onClick={handleToolConfirm} className='btn w-1/2 btn-form bg-accent'>ModalConfirm</button></li>
                <li><button onClick={handleToolArchive} className='btn w-1/2 btn-form bg-warning'>ModaArchive</button></li>
                <li><button onClick={handleToolDelete} className='btn w-1/2 btn-form bg-delete'>ModalDelete</button></li>
                <li><button onClick={handleToolError} className='btn w-1/2 btn-form bg-alert'>ModalError</button></li>
                <li><button onClick={handleToolHistory} className='btn w-1/2 btn-form bg-info'>ModalValidate</button></li>
            </ul>
              {/* main div */}
            </div>
         
            </div>
        </main>
    </section>
    {tooltipConfirm && <ModalConfirm position={"center"} setTooltipConfirm={setTooltipConfirm} /> }
    {tooltipArchive && <ModalArchive position={"center"} setTooltipArchive={setTooltipArchive} /> }
    {tooltipHistory && <ModalValidate position={"center"} setTooltipHistory={setTooltipHistory} /> }
    {tooltipError && <ModalError position={"center"} setTooltipError={setTooltipError} /> }
    {tooltipDelete && <ModalDelete position={"center"} setTooltipDelete={setTooltipDelete} /> }
 

    </>
  )
}

export default CheckerHome