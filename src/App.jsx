import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import ProductsList from './Components/ProductsList'
import ProductsForm from './Components/ProductsForm'
import Warning from './Components/Warning'

function App() {

  const [productsList, setProducts] = useState([])
  const [form, setForm] = useState()
  const [productSelected, setProductSelected] = useState(null)
  const [warning, setWarning] = useState(false)
  const [productsToDelete, setProductsToDelete] = useState(null)
  
  useEffect(() => {
    getProducts()

  },[])

  const getProducts = () => {
    axios.get("https://products-crud.academlo.tech/products/")
    .then(res => setProducts(res.data))
    .catch(error => console.error(error))
  }

  const selectProduct =(products) => {
    setForm(true)
    setProductSelected(products)

  }

  const getWarning = (products) => {
    setWarning(true)
    setProductsToDelete(products)
  }

  const cancelDelete = () => {
    setWarning(false)
    setProductsToDelete(null)
  }
  
  const deleteProducts = (productsToDelete) => {
    axios.delete(`https://products-crud.academlo.tech/products/${productsToDelete?.id}/`)
    .then(() => {
        getProducts()
        setWarning(false)
        setProductsToDelete(null)
    })
    .catch(error => console.error(error))
}

  return (
    <div className="App">
      
      { form && 
        <ProductsForm
        setForm={setForm}
        getProducts={getProducts}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      
        />
      }


      <ProductsList
       productsList={productsList}
       setForm={setForm}
       selectProduct={selectProduct}
       getProducts={getProducts}
       getWarning={getWarning}
      />

      {  warning &&
        <Warning
        productsToDelete={productsToDelete}
        cancelDelete={cancelDelete}
        deleteProducts={deleteProducts}
        />
      }
     

     <footer><strong>By Alexander Cedeño</strong>  | GEN-21 Academlo</footer>
      
    </div>
  )
  

}


export default App
