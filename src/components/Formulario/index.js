import './Formulario.css';

function Formulario({handleSubmit, children}) {
  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} className="formulario">
        {children}
      </form>
    </div>
  );
}

export default Formulario; 
