// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMedicine } from "./MedicineSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMedicine = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()
    const [ checkbox , setCheckbox ] = useState(false)
    const [fakeState , setFakeState]= useState('')
    const datas = useSelector((data) => data.manjulika);

    useEffect(() => {
        const mainData = datas.find((items) => items.id == id)
        setFakeState(mainData)
        setName(fakeState.name)
        setTitle(fakeState.title)
    },[])  
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id,
            name,
            title,
            checkbox
        }
        console.log(data)

       if(checkbox == true) {
        dispatch(updateMedicine(data))

        setName('');
        setTitle('');
        console.log(data)
        navigate('/showdata')

    }
}
  return (
    <div className='container form-control row col-md-6'>
    <form onSubmit={onSubmitHandler}>
        <h6>{id}</h6>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleInputPassword1"  value={title} onChange={(e) => setTitle(e.target.value)} />
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

export default UpdateMedicine;