import { useState } from "react";
import "./content-modal-new.css"


import { createPortal } from "react-dom";

export const ContentModalNew=({msg}:{msg:string})=> {
    const [isOpen, setIsOpen] = useState(true)
  
  return createPortal( // : 'modal'
    <div className={ `${isOpen?'openModal contentModal':'contentModal'}`}>
      {isOpen ? (
        <section>
          <header>
            <div>header</div>
            <button className="close" onClick={()=>setIsOpen(true)}>
              &times;
            </button>
          </header>
          <main>{msg}</main>
          <footer>
            <button className="close" onClick={()=>setIsOpen(false)}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>,
    document.getElementById("modal") as HTMLElement 
  );
  
}

