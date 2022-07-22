import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const CreatePage = () => {
    const [item, setItem] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState()
    const [condition, setCondition] = useState(true)
    const [errors, setErrors] = useState([])
    

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/items`, {item, brand, price, condition})
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
    

    return (
        <div>            
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label className='form-label'>Item:</label>
                    <input type='text' name='item' onChange={(e) => setItem(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Brand:</label>
                    <input type='text' name='brand' onChange={(e) => setBrand(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Price:</label>
                    <input type='number' name='price' onChange={(e) => setPrice(e.target.value)}className='form-control'/>
                </div>
                <div>
                    <label className='form-label'>Condition:</label>
                    <select name='condition' value={condition} onChange={(e) => setCondition(e.target.value)}className='form-select'>
                        <option value='true'>New</option>
                        <option value='false'>Used</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-success mt-3'>Create Post</button>
                    <Link to='/' className='btn btn-danger ms-3 mt-3'>Cancel</Link>
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

export default CreatePage