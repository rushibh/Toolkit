import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addmedicine } from './MedicineSlice'
import { Navigate, useNavigate } from 'react-router-dom'
const AddMedicine = () => {
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [title, setTitle] = useState('')
    const [ checkbox , setCheckbox ] = useState(false)
    const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id : nanoid(),
            name,
            title,
            checkbox
        }
        console.log(data)

       if(checkbox == true) {
        dispatch(addmedicine(data))

        setName('');
        setTitle('');

        navigate('/showdata')
    }
}
  return (
    <div className='container form-control row col-md-6'>
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                <input type="text" name='title' className="form-control" id="exampleInputPassword1" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"  onChange={(e) => setCheckbox(e.target.checked)}  />
                <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddMedicine