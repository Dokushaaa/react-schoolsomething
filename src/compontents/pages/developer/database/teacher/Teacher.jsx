import React from 'react'
import StaffTable from './TeacherTable'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import DatabaseInfomration from '../DatabaseInfomration'
import { CiSearch } from 'react-icons/ci'
import ModalAddTeacher from './ModalAddTeacher'
import useQueryData from '../../../../custom-hook/useQueryData'

const Teacher = () => {

  const {
    isLoading,
    isFetching,
    error,
    data: teacher,
  } = useQueryData(
    "/v1/teacher", // endpoint
    "get", // method
    "teacher" // key
  );
  

    // event Listener for view table data
    const [showInfo, setShowInfo] = React.useState(false);
    const handleShowInfo =  () => {setShowInfo(!showInfo)};

    //event listener for teacherAdd
    const [addTeacher, setTeacherInfo] = React.useState(false);
  const handleAddTeacher = () => {setTeacherInfo(true)};
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
                <input type="text" placeholder='Seach Teacher' className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-800 border placeholder:text-white placeholder:opacity-50 rounded-md placeholder:text-stone-400' />
              </form>
           </div>
            
            <div className="tab flex justify-between items-center my-8 border-b border-line ">
              <ul className='flex'>
                <li className='tab-link '><Link to="/database/student">Student</Link></li>
                <li className='tab-link active'><Link to="/database/teacher">Teacher</Link></li>
                <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                <li className='tab-link'><Link to="/database/checker">Checker</Link></li>
              </ul>
                <button className='btn btn--accent flex items-center gap-2' onClick={handleAddTeacher}>Add New Teacher Member<FiPlus/></button>
            </div>
           <StaffTable setShowInfo={setShowInfo} showInfo={showInfo} teacher={teacher} isLoading={isLoading} />
              {/* main div */}
            </div>
          <DatabaseInfomration showInfo={showInfo} />
            </div>
        </main>
    </section>
    {addTeacher && <ModalAddTeacher setTeacherInfo={setTeacherInfo}/>}
    {/* <ModalError  position={"center"}/> */}
    {/* <ModalValidate  position={"center"}/> */}
    {/* {<ModalDelete position={"center"} /> } */}
    {/* <ModalConfirm  position={"center"}/> */}

    {/* <SpinnerWindow/> */}

    </>
  )
}

export default Teacher