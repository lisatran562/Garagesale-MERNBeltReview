import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'
import FormComponent from '../components/FormComponent'

const EditPage2 = (props) => {
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

    const updateItem = item => {
        axios.put(`http://localhost:8000/api/items/${id}`, {item, brand, price, condition})
            .then(res => console.log(res))            
            navigate('/')

    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/items/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <FormComponent
            onSubmitProp={updateItem}
            initialItem={item.item}
            initialBrand={item.brand}
            initialPrice={item.price}
            initialCondition={item.condition}
            />
        </div>
    )
}

export default EditPage2

// work in progress