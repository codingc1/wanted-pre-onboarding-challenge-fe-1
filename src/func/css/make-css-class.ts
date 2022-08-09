
export interface IBasicStyleOption {
    bgColor?:string, hoverColor?:string, size?:string,bold?:string, color?: string, wide?:string, padding?:string
  }
  export interface IReadyStyleOption  {
    [key: string]: string, //https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
    bgColor:string, hoverColor:string, size:string,bold:string, color: string, wide:string, padding:string, etc:string,
  }

export const TWCC={
    //w-full text-lg font-medium text-white py-2
    //const smLimeClassNmaeStr ='w-full max-w-sm text-lg font-medium text-white py-2 bg-lime-600 hover:bg-lime-700 flex flex-col justify-center items-center'
    btnStyle:function(ready:IReadyStyleOption, style?:IBasicStyleOption|undefined){
        // return ' w-full max-w-sm bg-red-200 hover:bg-red-700 text-lg font-medium text-white p-2 flex flex-col justify-center items-center cursor-pointer';
        let resultStr =''
        for (const ele in ready) {
            resultStr += ' '+ready[ele] 
          }
          
        //'w-full max-w-sm',wide ='w-full', size='text-lg', bold='font-medium', color='white',padding:'p-2'
        if(!style)return resultStr
        const {wide, bgColor, hoverColor,size, color, bold, padding} = style
        // const {wide, color, hoverColor, size, padding} = style
        if(wide)resultStr=resultStr.replace(ready.wide, wide)
        
        if(bgColor){
            resultStr = resultStr.replace(ready.bgColor,bgColor)
        }
        
        if(hoverColor){
            if(hoverColor.includes('hover:')){
                resultStr=resultStr.replace(ready.hoverColor, hoverColor)
            }else{
                resultStr=resultStr.replace(ready.hoverColor, "hover:"+hoverColor)
            }
        }
        if(padding)resultStr=resultStr.replace(ready.padding, padding)
       
        if(color)resultStr=resultStr.replace(ready.color, color)
        if(size)resultStr=resultStr.replace(ready.size, size)
        if(bold)resultStr=resultStr.replace(ready.bold, bold)
        // console.log(resultStr, 'resultsrt')
        return resultStr.trim()
    },

}
// if(wide)resultStr.replace('w-full max-w-sm', wide)
        
// if(bgColor)resultStr.replace('bg-lime-600', bgColor)
// if(hoverColor){
//     if(hoverColor.includes('hover:')){
//         resultStr.replace('hover:bg-lime-700', hoverColor)
//     }else{
//         resultStr.replace('bg-lime-700', hoverColor)
//     }
// }
// if(padding)resultStr.replace('py-2', padding)

// if(color)resultStr.replace('text-white', color)
// if(size)resultStr.replace('w-full max-w-sm', size)
// if(bold)resultStr.replace('font-medium', bold)
// return resultStr