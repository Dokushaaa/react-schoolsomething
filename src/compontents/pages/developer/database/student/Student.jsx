import { FiPlus } from "react-icons/fi";
import React from "react";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import ModalAddStudent from "./ModalAddStudent";
import StudentTable from "./StudentTable";
import useQueryData from "../../../../custom-hook/useQueryData";
import Toast from "../../../../partials/Toast";
import StudentInformation from "./StudentInfomration";
import Searchbar from "./SearchBar";

const Student = () => {
   // for databaseinformation
 const [itemData, setItemData] = React.useState('');
 const [itemState, setItemState] = React.useState('');
 // for searchBar:
 const [isSearch, setIsSeach] = React.useState(false)
 const [keyword, setKeyword] = React.useState('');
//  other
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

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
    data: student,
  } = useQueryData(
    isSearch ? "/v1/student/search" : "/v1/student", // endpoint
    isSearch ? "post" : "get", // method
    ["student", isSearch], // key
    {
        searchValue: keyword
    }
  );

 


  return (
    <section className="flex overflow-x-hidden">
      <Navigation />
      <main className="w-[calc(100%-250px)]">
        <Header />
        <div className="flex relative">
          <div
            className={`main-wrapper transition-all px-4 py-3 ${
              showInfo ? "w-3/4" : "w-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <h1 className="leading-none mb-0">Student Database</h1>
              <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/>
            </div>

                    <div className="tab flex justify-between items-center my-8 border-b border-line ">
              <ul className='flex'>
              <li className='tab-link active'><Link to="/database/student">Student</Link></li>
                <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                <li className='tab-link '><Link to="/database/staff">Staff</Link></li>
                <li className='tab-link'><Link to="/database/checker">Checker</Link></li>
              </ul>
                <button className='btn btn--accent flex items-center gap-2' onClick={handleAdd}>Add New Staff Member<FiPlus/></button>
            </div>

            <StudentTable
              setShowInfo={setShowInfo}
              showInfo={showInfo}
              isLoading={isLoading}
              student={student}
              setItemEdit={setItemEdit}
              setIsAdd={setIsAdd}

              setIsSuccess={setIsSuccess}
              setMessage={setMessage}
              setIsError={setIsError}
              setItemData={setItemData}
              setItemState={setItemState}
            />
          </div>

          <StudentInformation showInfo={showInfo} setShowInfo={setShowInfo} itemData={itemData}
          itemState={itemState}
          // add if double click, add data to database information
          />
        </div>
      </main>
      {/* {showAddStudent && (
        <ModalAddStudent
          setAddStudent={setAddStudent}
          showAddStudent={showAddStudent}
        />
      )} */}
      {isAdd && (
        <ModalAddStudent
          setIsAdd={setIsAdd}
          setIsSuccess={setIsSuccess}
          setMessage={setMessage}
          itemEdit={itemEdit}
          
          setIsError={setIsError}
        />
      )}
      {isSuccess && <Toast setIsSuccess={setIsSuccess} message={message} setIsError={setIsError} />}
      {isError && <Toast setIsSuccess={setIsSuccess} message={message} setIsError={setIsError} />}
    </section>
  );
};

export default Student;
