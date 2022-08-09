import React from "react";
import { IBasicStyleOption, IReadyStyleOption, TWCC } from "../../../func/css/make-css-class";

interface IButtonProps {
  loading?: boolean;
  text: string;
  submit:()=>void;
  // {color, hoverColor}:{
  style?:IBasicStyleOption
  
}
//focus:outline-none transition-colors  cursor-pointer
const smLimeClassNmaeStr ='w-full max-w-sm text-lg font-medium text-white py-2 bg-lime-600 hover:bg-lime-700 flex flex-col justify-center items-center cursor-pointer'
// size:string,bold:string, color: string,  padding:string, etc:string,
const smLimeClassNmaeObj:IReadyStyleOption={
  wide:'w-full max-w-sm', bgColor:'bg-lime-600',hoverColor:'hover:bg-lime-700',
  size:'text-lg', bold:'font-medium', color:'text-white', padding:'p-2' ,etc:'flex flex-col justify-center items-center cursor-pointer',
}
export const SmLimeButton: React.FC<IButtonProps> = ({loading, text, submit, style} )=> {

    return(
    <button //role="button"
      onClick={submit}
      className={`${TWCC.btnStyle(smLimeClassNmaeObj, style) }`}
    >
      {loading ? "Loading..." : text}
    </button>
  )
};