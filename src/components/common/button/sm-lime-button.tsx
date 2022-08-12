import React from "react";
import { IBasicStyleOption, IReadyStyleOption, TWCC } from "../../../func/css/make-css-class";

interface IButtonProps {
  loading?: boolean;
  text: string;
  submit:()=>void;
  // {color, hoverColor}:{
  style?:IBasicStyleOption
  
}

const smLimeClassNmaeObj:IReadyStyleOption={
  wide:'w-full max-w-sm', bgColor:'bg-lime-600',hoverColor:'hover:bg-lime-700',
  size:'text-lg', bold:'font-medium', color:'text-white', padding:'p-2' ,etc:'flex flex-col justify-center items-center cursor-pointer',
}
export const SmLimeButton = ({loading, text, submit, style}:IButtonProps )=> {

    return(
      <button 
        onClick={submit}
        className={`${TWCC.btnStyle(smLimeClassNmaeObj, style) }`}
      >
        {loading ? "Loading..." : text}
      </button>
  )
};