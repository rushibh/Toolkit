import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
// import UseReducerHook from './Hooks/UseReducerHook'
import AddMedicine from './features/Medicine/AddMedicine'
import ShowMedicine from './features/Medicine/ShowMedicine'
import UpdateMedicine from './features/Medicine/UpdateMedicine'
import Login from './features/Medicine/Login'
import PrivateRouting from './features/Medicine/PrivateRoute/PrivateRouting'
function App() {

  const location = useLocation()
  return (
    <>
      {location.pathname == '/showdata' ?  <button><Link to='/addmedicine'>bramastra part one</Link></button> :''}
     
      <Routes>
          <Route path='/addmedicine' element={ <PrivateRouting ><AddMedicine /> </PrivateRouting>} />
          <Route path='/showdata' element={ <PrivateRouting ><ShowMedicine /> </PrivateRouting>} />
          <Route path='/' element={ <PrivateRouting ><ShowMedicine /> </PrivateRouting>} />
          <Route path='/update/:id' element={<PrivateRouting ><UpdateMedicine /> </PrivateRouting>} />
        <Route path='/Login' element={<Login />} />
        </Routes>
    </>
  )
}

export default App
