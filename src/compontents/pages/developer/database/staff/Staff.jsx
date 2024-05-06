import React from 'react'
import StaffTable from './StaffTable'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import DatabaseInfomration from '../DatabaseInfomration'
import { CiSearch } from 'react-icons/ci'
import ModalAddStaff from './ModalAddStaff'
import useQueryData from '../../../../custom-hook/useQueryData'

const Staff = () => {

  const {
    isLoading,
    isFetching,
    error,
    data: staff,
  } = useQueryData(
    "/v1/staff", // endpoint
    "get", // method
    "staff" // key
  );
  
    const [showInfo, setShowInfo] = React.useState(false);
    const handleShowInfo =  () => {setShowInfo(!showInfo)};

        //event listener for StaffAdd
    const [addStaff, setStaffInfo] = React.useState(false);
    const handleAddStaff = () => {setStaffInfo(true)};

  return (
    <>
    <section className="flex overflow-x-hidden">
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className="flex relative">
            <div className={`main__wrapper transition-all px-4 py-3 ${showInfo ? "w-3/4" :  "w-full"}`}>
           <div className="flex justify-between items-center">
           <h1>Database</h1>
              <form action="" className='searchBar relative'>
              <CiSearch className='searchIcon opacity-50 absolute top-1 left-2 z-[25] text-black text-2xl'/> 
                <input type="text" placeholder='Seach Student' className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-800 border placeholder:text-white placeholder:opacity-50 rounded-md placeholder:text-stone-400' />
              </form>
           </div>
            
            <div className="tab flex justify-between items-center my-8 border-b border-line ">
              <ul className='flex'>
              <li className='tab-link '><Link to="/database/student">Student</Link></li>
                <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                <li className='tab-link active'><Link to="/database/staff">Staff</Link></li>
                <li className='tab-link'><Link to="/database/checker">Checker</Link></li>
              </ul>
                <button className='btn btn--accent flex items-center gap-2' onClick={handleAddStaff}>Add New Staff Member<FiPlus/></button>
            </div>
           <StaffTable setShowInfo={setShowInfo} showInfo={showInfo} staff={staff} isLoading={isLoading} />
              {/* main div */}
            </div>
          <DatabaseInfomration showInfo={showInfo} />
            </div>
        </main>
    </section>
    {addStaff && <ModalAddStaff setStaffInfo={setStaffInfo} />}
    {/* <ModalError  position={"center"}/> */}
    {/* <ModalValidate  position={"center"}/> */}
    {/* {<ModalDelete position={"center"} /> } */}
    {/* <ModalConfirm  position={"center"}/> */}

    {/* <SpinnerWindow/> */}

    </>
  )
}

export default Staff