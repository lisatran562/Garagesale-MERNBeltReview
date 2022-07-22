import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const EditPage = () => {
    const [item, setItem] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState()
    const [condition, setCondition] = useState(true)
    const [errors, setErrors] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(res => {
                const item = res.data
                setItem(item.item)
                setBrand(item.brand)
                setPrice(item.price)
                setCondition(item.condition)
            
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/items/${id}`, {item, brand, price, condition})
            .then(res => navigate('/'))
            .catch(err => {
                const errMsgArr = []
                const errResponse = err.response.data.errors
                for(const eachKey in errResponse) {
                    errMsgArr.push(errResponse[eachKey].message)
                }
                setErrors(errMsgArr)
            })
    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/items/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label className='form-label'>Item:</label>
                    <input type='text' name='item' value={item} onChange={(e) => setItem(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Brand:</label>
                    <input type='text' name='brand' value={brand} onChange={(e) => setBrand(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Price:</label>
                    <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Condition:</label>
                    <select name='condition' value={condition} onChange={(e) => setCondition(e.target.value)}className='form-select'>
                        <option value='true'>New</option>
                        <option value='false'>Used</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-success mt-3'>Edit Post</button>
                    <Link to='/' className='btn btn-danger ms-3 mt-3'>Cancel</Link>
                    <button onClick={handleDelete} className='btn btn-secondary ms-3 mt-3'>Delete</button>
                </div>
            </form>
            {
                errors.map((err, i) => {
                    return(
                        <p style={{color: "red"}} key={i}>{err}</p>
                    )
                })
            }
        </div>
    )
}

export default EditPage