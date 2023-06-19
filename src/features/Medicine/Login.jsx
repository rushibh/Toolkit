import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('')
    const [checkbox , setCheckbox] = useState(false)
    const navigate = useNavigate()

    const onChangeName = (e) => {
        if(e.target.name == "name") {
            setName(e.target.value);
        }
        else{
            setPassword(e.target.value)
        }
    }

    const OnSubmitData = (e) => {
        e.preventDefault();
            const data = {
                name,
                password,
                checkbox,
                token : "abcd@token"
            }
            console.log(data)
            localStorage.setItem('user',JSON.stringify(data.token))
            navigate('/showdata')
    }
  return (
    <div>
        <form onSubmit={OnSubmitData}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" onChange={onChangeName} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChangeName } />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="checkbox" onChange={(e) => setCheckbox(e.target.checked)} />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Login