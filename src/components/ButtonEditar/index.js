import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import './ButtonEditar.css'

function ButtonEditar({onClick}){
    return(
        <button className="btt-editar" onClick={onClick}>
           <FontAwesomeIcon icon={faEdit} />

        </button>
    )
}

export default ButtonEditar; 