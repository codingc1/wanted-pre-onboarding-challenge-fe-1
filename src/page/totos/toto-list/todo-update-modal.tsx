import { useState } from "react"
import { ContentModal } from "../../../components/common/content-modal"
import { ContentModalNew } from "../../../components/common/modal/content-modal-new"
import { useContentModal } from "../../../components/common/modal/useContentModal"
import { ITodo } from "../../../stores/todo-data"



export const TodoUpdateModal=({todoItem}:{todoItem:ITodo,})=>{

    const [modalVisible, setModalVisible] = useState(false)
    const [tmpUpdateTodo, setTmpUpdateTodo] = useState<ITodo>(todoItem)

    const [isModalOpen, setIsModalOpen, modal] = useContentModal({msg:'content'})
    const openModal = () => {
    setModalVisible(true)
    }
    const closeModal = () => {
    setModalVisible(false)
    }
    const onChangeContent=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setTmpUpdateTodo({...tmpUpdateTodo, content: e.target.value})
    }
    const submit=async()=>{

    }

    return(
        <div>
          <button onClick={()=>setIsModalOpen(true)}>수정</button>
          {isModalOpen && modal()}
          {/* <ContentModalNew msg={'ss'} /> */}
          {/* {
            modalVisible && <ContentModal maskClosable={true} onClose={closeModal} height={'450px'} children={
            <div className="w-full h-full text-black">
                <div className=" text-lg text-center mb-6">Todo Update</div>
                
                <div className=" text-tiny">
                    <div className=" mb-2">title</div>
                    <div className="mb-6 text-gray-500">{tmpUpdateTodo.title}
                    </div>

                    <div className=" mb-2">수정할 문장</div>
                    <div className="flex align-middle mb-6">
                        <textarea className=" w-96  focus:outline-none p-1" style={{ resize:'none', border:'1px solid #e7e7e7'}} 
                            // placeholder="여기에&#13;&#10;입력하세요"
                            maxLength={250} 
                            rows={6}
                            autoFocus
                            value={tmpUpdateTodo.content} onChange={onChangeContent} />
                    </div>
                </div>

                <div className="flex px-2 mb-5 justify-center items-center">
                    <div className=" w-24 h-8 mr-3 bg-white flex items-center justify-center hover:bg-gray-100 active:bg-blue-300" 
                        style={{border:'1px solid #d8d8d8', borderRadius:'7px'}} onClick={submit}>확인</div>
                    <div className=" w-24 h-8 bg-white flex items-center justify-center hover:bg-gray-100 active:bg-blue-300" 
                        style={{border:'1px solid #d8d8d8', borderRadius:'7px'}} onClick={closeModal}>취소</div>                    
                </div>
    
            </div>
            }/>
            }  */}
        </div>
    )
}
