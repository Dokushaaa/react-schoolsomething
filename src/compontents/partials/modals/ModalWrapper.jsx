import React from 'react'

const ModalWrapper = ({children, position}) => {
  return (
    <>
    <div className={`fixed top-0 left-0 ${position ==="center" ? "justify-center" : "justify-end"} w-full h-screen flex justify-end items-center isolate z-[30]`}>
    <div className="backdrop absolute top-0 left-0 h-full w-full bg-primary/60  -z-10"></div>
    {children}  
    </div>
    </>
  )
}

export default ModalWrapper