

export const authChk={
  chkEmail:function(str:string){
    if(!(str.includes("@") && str.includes(".")))return '이메일을 입력해 주세요'
    return
  },
  chkPassword:function(str:string){
    if(str.length < 8)return '8자 이상 입력해 주세요'
    return
  },
}
