


import React, { useEffect } from 'react'

interface IModalFormProps {
  onClose:()=>void;
  maskClosable: boolean;  
    children: React.ReactNode;
    width?:string;
    height?:string;
}

export const ContentModal=({ onClose,  maskClosable,  children,width='380px', height='50%'}:IModalFormProps) =>{ //canclefunc
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
  return () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = `position: ""; top: "";`
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}, [])
  const onMaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
<>
      <div  style={{ position: 'fixed', top: 0, left: 0, bottom: 0,
        right: 0, backgroundColor:' rgba(0, 0, 0, 0.6)', zIndex: 999}}>
    </div>
      <div style={{position: 'fixed', top: 0, right: 0, bottom: 0,  left: 0,
        zIndex: 1000, overflow: 'auto',  outline: 0, }} className={'w-full flex justify-center items-center '} tabIndex={-1} 
        onClick={(e)=>maskClosable ? onMaskClick(e):console.log()} >
        <div style={{ boxShadow: `0 0 6px 0 rgba(0, 0, 0, 0.5)`,  backgroundColor: '#fff',
            borderRadius: '10px', minWidth: '360px',width:`${width}`, height:`${height}`, overflow: 'auto', transform: 'translateY(-50%), margin: 0 auto',
            padding: '20px 20px'}} tabIndex={0}>
          {children}
        </div >
      </div> 
    </>
  )
}