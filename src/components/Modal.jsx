import CerrarModal from '../img/cerrar.svg'

const Modal = ({setModal}) => {
    const OcultarModal =() => {
        setModal(false)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarModal}
                alt = "Cerrar modal"
                onClick = {OcultarModal}
            />
        </div>
    </div>
  )
}

export default Modal