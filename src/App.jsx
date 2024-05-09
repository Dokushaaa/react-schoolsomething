import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Student from './compontents/pages/developer/database/student/Student'
import Teacher from './compontents/pages/developer/database/teacher/Teacher'
import Staff from './compontents/pages/developer/database/staff/Staff'
import PageError from './compontents/partials/pageNotFound/PageError'
import CheckerHome from './compontents/pages/developer/database/checker/CheckerHome'
import { baseImgUrl } from './compontents/helpers/functions-general'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StoreProvider } from './store/StoreContext'



const NotFound = () => {
  return (
    <>
    <div className="404pager">
    <div className='flex flex-col justify-center items-center h-screen'>
     <h1 className='text-accent text-3xl'> <span className='italic'>404</span> - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <img src="/public/404.gif" alt="ducking-around" className='size-[20rem] transition-all rounded-md border-2 border-gradient-to-r from-blue-500 to-purple-500' />
     </div>
    </div>
    </>
  );
};
function App() {
  const queryClient = new QueryClient;
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
            <Router>
              <Routes>
                <Route path='/database/student' element={<Student/>}/>
                <Route path='/database/teacher' element={<Teacher/>}/>
                <Route path='/database/staff' element={<Staff/>}/>
                <Route path='/database/checker' element={<CheckerHome/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
           </Router>
    </StoreProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
