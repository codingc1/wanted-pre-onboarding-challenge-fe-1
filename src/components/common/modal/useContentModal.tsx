import { ReactNode, SetStateAction, useState } from "react";
import "./content-modal-new.css"
import { createPortal } from "react-dom";
export interface IContentModal {
  header:ReactNode,
  main:ReactNode,
  // msg:string,
  
}

export const useContentModal=({main, header}:IContentModal):[boolean, React.Dispatch<SetStateAction<boolean>>, () => React.ReactPortal]=> {
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const modal=()=>{
        return createPortal( // : 'modal'
        <div className={ `${isModalOpen?'openModal contentModal':'contentModal'}`}>
          {isModalOpen ? (
            <section>
              <header>
                {header}
                <button className="close" onClick={()=>setIsModalOpen(false)}>
                  &times;
                </button>
              </header>
              <main>
                {main}
              </main>
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

