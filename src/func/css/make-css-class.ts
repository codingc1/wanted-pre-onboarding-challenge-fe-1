
export interface IBasicStyleOption {
    bgColor?:string, hoverColor?:string, size?:string,bold?:string, color?: string, wide?:string, padding?:string
  }
  export interface IReadyStyleOption  {
    [key: string]: string, //https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
    bgColor:string, hoverColor:string, size:string,bold:string, color: string, wide:string, padding:string, etc:string,
  }


export const TWCC={
    btnStyle:function(ready:IReadyStyleOption, style?:IBasicStyleOption|undefined){
        let resultStr =''
        for (const ele in ready) {
            resultStr += ' '+ready[ele] 
          }

        if(!style)return resultStr
        const {wide, bgColor, hoverColor,size, color, bold, padding} = style
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
        return resultStr.trim()
    },

}
