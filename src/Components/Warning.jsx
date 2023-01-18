import axios from "axios"

const Warning = ({productsToDelete, cancelDelete, deleteProducts}) => {

  

    return (
      <div className="container_warning">
        <div className="warning">
          <h4>Deseas eliminar <br />{productsToDelete?.name}</h4>
          <p>Esta acción es permanente!</p> <br />
          <button className="eliminar" onClick={() => deleteProducts(productsToDelete)}>Eliminar</button>
          <button className="cancelar" onClick={() => cancelDelete()}>Cancelar</button>
        </div>
      </div>

    )
}

export default Warning