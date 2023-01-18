import axios from "axios"


const ProductsList = ({productsList, setForm, selectProduct, getProducts, getWarning}) => {
    console.log(productsList);

    return (
        <div className="list_products">
            <h1>Listado de Productos</h1>
            <div className="agregar">
                <p><strong>Productos en el inventario </strong>{productsList.length}</p>
                <button onClick={() => setForm(true)}>+ Agregar producto</button>
            </div >
           <div className="container__card">
                {
                    productsList?.map((products) => (
                        <div className="card" key={products.id}>
                            <h4>{products.name}</h4>
                        <div className="body__card">
                            <div className="contenido_products">
                                <p><strong>Category </strong> <br />{products.category}</p>
                                <p><strong>Price </strong> <br />{products.price}</p>
                                <p><strong>IsAvailable </strong> <br />{products.isAvailable.toString()}</p>
                            </div>
                            <div className="products__controler">
                                <div onClick={() => getWarning(products)}>
                                    <i className='bx bxs-message-square-x'>Eliminar</i> 
                                </div>
                                <div onClick={() => selectProduct(products)}>
                                    <i className='bx bxs-edit-alt'>Editar</i>
                                </div> 
                            </div>
                        </div>
                            
                            

                        </div>

                    ))  
                }
          </div>
        </div>

    )
}

export default ProductsList