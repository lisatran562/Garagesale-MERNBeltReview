import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Dashboard = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/items/${deleteId}`)
            .then(res => {
                const filteredList = items.filter(eachItem => eachItem._id !== deleteId)
                setItems(filteredList)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='mt-4'>
            <h4><Link to='/items/new'>Create a post</Link></h4>
            <table className='table table-striped mt-5'>
                <thead>
                    <th>Item</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Condition</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        items.map((eachItem, i) => {
                            return(
                                <tr key={i}>
                                    <td><Link to={`items/${eachItem._id}`}>{eachItem.item}</Link></td>
                                    <td>{eachItem.brand}</td>
                                    <td>{eachItem.price}</td>
                                    <td>{eachItem.condition?"New":"Used"}</td>
                                    <td><Link to={`items/edit/${eachItem._id}`} className="btn btn-primary btn-sm">Edit</Link></td>
                                    <td><button onClick={e=>handleDelete(eachItem._id)} className='btn btn-danger btn-sm ms-2'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard