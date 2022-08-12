import { SetStateAction, useState } from "react";
import "./content-modal-new.css"


import { createPortal } from "react-dom";

export const useContentModal=({msg}:{msg:string}):[boolean, React.Dispatch<SetStateAction<boolean>>, () => React.ReactPortal]=> {
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const modal=()=>{
        return createPortal( // : 'modal'
        <div className={ `${isModalOpen?'openModal contentModal':'contentModal'}`}>
          {isModalOpen ? (
            <section>
              <header>
                <div>header</div>
                <button className="close" onClick={()=>setIsModalOpen(false)}>
                  &times;
                </button>
              </header>
              <main>{msg}</main>
              <footer>
                <button className="close" onClick={()=>setIsModalOpen(false)}>
                  close
                </button>
              </footer>
            </section>
          ) : null}
        </div>,
        document.getElementById("modal") as HTMLElement 
      );
    }


  return [isModalOpen, setIsModalOpen, modal]
  
}

