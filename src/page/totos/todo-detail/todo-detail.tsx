import { useEffect } from "react";
import { useParams } from "react-router";

// export interface IBoardsView {
//     id: string;
//   }

export const TodoDetail=()=>{
    // const {id} = useParams();
    // useEffect(()=>{
        
    //     console.log(id, 'id')
    // },)

    return(
        <div className="w-full h-screen flex flex-col items-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
                <div className="w-full flex justify-center  items-center mt-16" >
                    {/* <div className=" cursor-pointer" onClick={goHome}>홈</div> */}
                    <div className="ml-2 font-semibold text-xl">Todo Detail</div>
                </div>
            <div className="w-full">    
            <div className="w-full flex mt-2 " style={{border:'1px solid rgb(229 231 235)', }}>
              
              {/* <div className="w-full " >
                  <div className="w-full h-8 flex items-center align-middle">
                    <TodoUpdateModal todoItem={el} />
                    <div className='w-full h-full hover:text-blue-400 cursor-pointer' >{el.title}</div>
                  </div>
                  <div className="w-full h-8 flex">
                    <div className="w-8"></div>
                    <div className='w-full '>{el.content}</div>
                  </div>
              </div>
              <div ></div>
                <TodoDelButton todoItem={el} /> */}
            </div>
            </div>
            </div>
        </div>
    )
}