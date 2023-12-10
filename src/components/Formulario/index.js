import './Formulario.css';

function Formulario({handleSubmit, children,showPopup, setShowPopup}) {
  return (
    <div className={`container-form ${showPopup ? 'show' : ''}`}>
      <form onSubmit={handleSubmit} className="formulario">
        {children}
      </form>
    </div>
  );
}

export default Formulario; 
