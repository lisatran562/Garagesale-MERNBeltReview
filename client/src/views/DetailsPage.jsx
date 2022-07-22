import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const DetailsPage = () => {
    const [items, setItems] = useState()

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/items/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                items?
                <div className='mt-5'>
                    <h5>Item: {items.item}</h5>
                    <h5>Brand: {items.brand}</h5>
                    <h5>Price: ${items.price}</h5>
                    <h5>Condition: {items.condition? "New":"Used"}</h5>
                    <Link to={`/items/edit/${id}`} className='btn btn-primary mt-3'>Edit Post</Link>
                    <Link to='/' className='btn btn-secondary mt-3 ms-3'>Cancel</Link>
                    <button onClick={handleDelete} className='btn btn-danger mt-3 ms-3'>Delete</button>
                </div>:
                <h1>Wrong ID</h1>
            }
        </div>
    )
}

export default DetailsPage