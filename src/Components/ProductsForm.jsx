import { useForm } from 'react-hook-form'
import axios from "axios"
import { useEffect } from 'react'


const ProductsForm = ({ setForm, getProducts, productSelected, setProductSelected }) => {
    const { handleSubmit, register, reset } = useForm()
    const inputNull = { name: "", category: "", price: "", isAvailable: "" }

    useEffect(() => {
        if (productSelected) {
            reset(productSelected)
        } else {
            reset(inputNull)
        }

    }, [productSelected])

    const submit = (data) => {
        if (productSelected) {
            axios.put(`https://products-crud.academlo.tech/products/${productSelected.id}/`, data)
                .then(() => {
                    getProducts()
                    closeForm()
                })
                .catch(error => console.error(error))
        } else {
            axios.post(`https://products-crud.academlo.tech/products/`, data)
                .then(() => {
                    getProducts()
                    closeForm()
                })
                .catch(error => console.error(error))
        }

    }

    const closeForm = () => {
        setForm(false)
        setProductSelected(null)
    }

   

    return (
        <div className='container__form'>
            <div className='card__form'>
                <div className='border__form'>
                    <button className='cerrar_form' onClick={() => closeForm()}> X </button>
                    <h3>Formulario de productos</h3>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className='input-container_m'>
                            <div className='input-container'>
                              <label htmlFor="name">Name</label>
                              <input type="text" id='name' {...register("name")} />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="category"><i class='bx bxs-category'></i>Category</label>
                                <input type="text" id='category' {...register("category")} />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="Price"><i class='bx bxs-badge-dollar'></i>Price</label>
                                <input type="number" id='price' {...register("price")} />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="isAvailable">isAvailable</label>
                                <input type="checkbox" id='isAvailable'{...register("isAvailable")} />
                            </div>
                        </div>
                        <button className='btn__form' type='submit'>{productSelected ? "Update product" : "New product"}</button>
                    </form>
                
                </div>
            </div>

        </div>


    )
}

export default ProductsForm