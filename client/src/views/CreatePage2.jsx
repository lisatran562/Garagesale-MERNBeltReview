import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import FormComponent from '../components/FormComponent'

const CreatePage2 = () => {

    const [items, setItems] = useState([])


    const navigate = useNavigate()

    const createItem = item => {
        axios.post(`http://localhost:8000/api/items`, item)
            .then(res=> {
                setItems([...items, res.data])
                navigate('/')
            })
    }

    return (
            <div>
                <FormComponent onSubmitProp={createItem} initialItem="" initialBrand="" initialPrice="" initialCondition="true"/>
            </div>
    )
}

export default CreatePage2

// attempt at reusing the form component on create page