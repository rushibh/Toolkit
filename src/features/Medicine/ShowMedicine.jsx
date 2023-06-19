import { useDispatch, useSelector } from "react-redux";
import { deletemedicine, mydata , updateMedicine  } from "./MedicineSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const ShowMedicine = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [serach , setSearch] = useState('')
  const data = useSelector(mydata);
    const onClickDelete = (id) => {
        dispatch(deletemedicine(id))
    }

    const onClickUpdate = (id) => {
      navigate(`/update/${id}`)
    }


    // search 

    const onSearch = (event) => {
      event.preventDefault()

      const data = serach;
      setSearch(data)
    } 
  return (
    <>
      <form className="d-flex my-5">
        <input className="form-control me-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="button" onClick={onSearch}>Search</button>
      </form>
    <div className="container raw d-flex flex-wrap">
      {data.filter((item ) =>item.name.toLowerCase().includes(serach.toLowerCase())).map((i) => {
        return (
          <div className="card-body"  key={Math.random()}>
            <div className="card" style={{ width: "25rem" }} >
              <h5 className="card-title">{i.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{i.title}</h6>
              <button onClick={() => onClickDelete(i.id)} className="btn btn-outline-primary">
                Delete
              </button>
              <button onClick={() => onClickUpdate(i.id)} className="btn btn-outline-primary">
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ShowMedicine;
