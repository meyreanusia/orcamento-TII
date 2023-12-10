import'./ButtonExcluir.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

function ButtonExcluir({onClick}){
    return(<button className="btt-excluir" onClick={onClick}><FontAwesomeIcon icon={faTrashAlt} /></button>)
}

export default ButtonExcluir; 