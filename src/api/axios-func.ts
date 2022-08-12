import { AxiosError, AxiosStatic } from "axios";



type TodoErrorResponse = {
    details: string;
  };
export const axiosDetailErr=(axios: AxiosStatic, error: Error | AxiosError)=>{
    try{
    if(!axios.isAxiosError(error)){
        alert('문제가 발생하였습니다.')
      }else{
        if ( error.response && error.response.data) {
            if( typeof error.response.data === 'object'){
                if( error.response.data.hasOwnProperty('details') ){ //error.response.data.hasOwnProperty('details')
                    const text = (error.response.data as TodoErrorResponse).details 
                    alert('Detail : '+text)
                }else{
                    alert('respons error not have detail')
                }
                
            }

            // console.log((error.response?.data as TodoErrorResponse).details, 'details');
          }
      }
    }catch(err){
        console.log(err, 'aixosErr in catch')
    }
}

