import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const FormComponent = (props) => {
    const {initialItem, initialBrand, initialPrice, initialCondition, onSubmitProp} = props
    const [item, setItem] = useState(initialItem)
    const [brand, setBrand] = useState(initialBrand)
    const [price, setPrice] = useState(initialPrice)
    const [condition, setCondition] = useState(initialCondition)


    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({item, brand, price, condition})
        
    }
    
    

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label className='form-label'>Item:</label>
                <input type='text' name='item' value={item} onChange={(e) => {setItem(e.target.value)}} className='form-control'/>
            </div>
            <div>
                <label className='form-label'>Brand:</label>
                <input type='text' name='brand' value={brand} onChange={(e) => {setBrand(e.target.value)}} className='form-control'/>
            </div>
            <div>
                <label className='form-label'>Price:</label>
                <input type='number' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} className='form-control'/>
            </div>
            <div>
                <label>Condition</label>
                <select name='condition' value={condition}onChange={(e) => {setCondition(e.target.value)}} className='form-select'>
                    <option value='true'>New</option>
                    <option value='false'>Used</option>
                </select>
            </div>
            <button onClick={onSubmitHandler} className='btn btn-secondary mt-3'>Submit</button>
            <Link to='/' className='btn btn-primary ms-3 mt-3'>Cancel</Link>

        </form>
    )
}

export default FormComponent