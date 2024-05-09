import React from 'react'
import TeacherTable from './TeacherTable'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'
import ModalAddTeacher from './ModalAddTeacher'
import useQueryData from '../../../../custom-hook/useQueryData'
import Toast from '../../../../partials/Toast'
import TeacherInfomration from './TeacherInfomration'

const Teacher = () => {
  const [showInfo, setShowInfo] = React.useState(false);
  const handleShowInfo = () => setShowInfo(!showInfo);

  const [isAdd, setIsAdd] = React.useState(false);
  const handleAdd = () => {
    setIsAdd(true), setItemEdit(null);
  };
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
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [itemEdit, setItemEdit] = React.useState(null);
  
    const [isError, setIsError] = React.useState(false);

      // for databaseinformation
  const [itemData, setItemData] = React.useState('');
  const [itemState, setItemState] = React.useState('');
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
              <h1 className="leading-none mb-0">Teacher Database</h1>
              <form action="" className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Teacher"
                  className="p-1 px-3 pl-10 bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20 text-content"
                />
                <CiSearch className="absolute ty-a left-2 z-[1] text-white text-2xl opacity-20" />
              </form>
            </div>
            
            <div className="tab flex justify-between items-center my-8 border-b border-line ">
              <ul className='flex'>
              <li className='tab-link '><Link to="/database/student">Student</Link></li>
                <li className='tab-link active'><Link to="/database/teacher">Teacher</Link></li>
                <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                <li className='tab-link'><Link to="/database/checker">Checker</Link></li>
              </ul>
                <button className='btn btn--accent flex items-center gap-2' onClick={handleAdd}>Add New Teacher Member<FiPlus/></button>
            </div>
            <TeacherTable
              setShowInfo={setShowInfo}
              showInfo={showInfo}
              isLoading={isLoading}
              teacher={teacher}
              setItemEdit={setItemEdit}
              setIsAdd={setIsAdd}

              setIsSuccess={setIsSuccess}
              setMessage={setMessage}
              setIsError={setIsError}
              // info:
              setItemData={setItemData}
              setItemState={setItemState}
            />
              {/* main div */}
            </div>
          <TeacherInfomration  showInfo={showInfo} setShowInfo={setShowInfo} itemData={itemData}
          itemState={itemState} />
            </div>
        </main>
    </section>
    {isAdd && (
        <ModalAddTeacher
          setIsAdd={setIsAdd}
          setIsSuccess={setIsSuccess}
          setMessage={setMessage}
          itemEdit={itemEdit}
          
          setIsError={setIsError}
        />
      )}
      {isSuccess && <Toast setIsSuccess={setIsSuccess} message={message} setIsError={setIsError} />}
      {isError && <Toast setIsSuccess={setIsSuccess} message={message} setIsError={setIsError} />}

    </>
  )
}

export default Teacher