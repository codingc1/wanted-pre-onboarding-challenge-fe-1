import { useState } from "react"
import { useContentModal } from "../../../components/common/modal/useContentModal"
import { ITodo } from "../../../stores/todo-data"
import { HiPencilAlt} from "react-icons/hi";


export const TodoUpdateModal=({todoItem}:{todoItem:ITodo,})=>{

    const [modalVisible, setModalVisible] = useState(false)
    const [tmpUpdateTodo, setTmpUpdateTodo] = useState<ITodo>(todoItem)

    const [isModalOpen, setIsModalOpen, modal] = useContentModal({
        header:<div className=" text-center">{todoItem.title}</div>, 
        // msg:todoItem.content,
        main:(
            <div className="w-full py-2">
                <div>
                    {todoItem.content}
                </div>
            </div>
        )
    })
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
        <div className=" w-8 h-full flex justify-center items-center cursor-pointer hover:text-blue-400">
          
            <HiPencilAlt size={14} onClick={()=>setIsModalOpen(true)}/>
          
          <div>{isModalOpen && modal()}</div>

        </div>
    )
}
