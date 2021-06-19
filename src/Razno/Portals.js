import React,{useState,Fragment} from 'react';
import ReactDom from 'react-dom'

//React Portal je mehanizam unutar Reacta koji nam omogučuje da neka React komponenta ili jsx ostane unutar standardnog React tree rasporeda unatoč tome
//što će se rendati negdje druge u stvarnom DOM tree.
//Koristi se na način da u returnu neke kompontet pozovemo ReactDom.createPortal(nekiKompontaIliJsx,nekiStvarniElementUnutarDomaKojiĆeBitiLokacijaTogaUPrvomArgumnetu).
//U ovom ovdje primjeru unutar public foldera u index.html sam dodao div sa id portal, drugi arugmnet React.createPortal može biti i document.documentElement tj. html element.
//Također kada je riječ o event propagaciji tj. event bubblingu iako u stvarnom DOM tree kada koristimo portal neki element više nisu nested kao u React tree ipak
//će event bubbling raditit na način kao da su nested unutar stvarnog DOM-a.

//Važno: Ovdje su dvije komponet u ovom file napisane. Modal i Portals.

  //Za Modal stilovi
  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
  
   function Modal({ open, children, onClose }) {
    if (!open) return null
  
    return ReactDom.createPortal(
  
      <Fragment>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button onClick={onClose}>Close Modal</button>
          {children}
        </div>
     </Fragment>,
     //Unutar public foldera u index.html sam dodao div sa id portal
      document.getElementById('portal')
    )
  }

  //Za prvi div unutar Portals komponete stil
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  
  //Za drugi div unutar Portals komponete stil
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }
  

function Portals(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

export default Portals;