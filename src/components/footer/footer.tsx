import React from "react";

export const Footer: React.FC = () => {
return(    
<footer className="w-full max-w-screen-lg mx-auto flex mt-20 mb-5 text-gray-400">
  {/* <div className=" max-w-xs"><img src={logo} width="32" height="32" alt="hang" /></div> */}
  <div className="w-full max-w-2xl px-3">
  <ul className="w-full flex">

    <li><div onClick={()=>alert('codingc@hanmail.net')} className="cursor-pointer">문의 &nbsp;|&nbsp;&nbsp;</div></li>
    <li className="text-gray-400">ⓒ2022 조규창</li>
  </ul>
  {/* <p className="text-gray-400">
    ⓒ2022 조규창<br></br>
  </p> */}
  </div>
</footer>


)
}