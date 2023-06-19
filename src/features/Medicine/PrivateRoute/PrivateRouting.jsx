import { Navigate } from 'react-router-dom';

function PrivateRouting({children}) {

    const user = JSON.parse(localStorage.getItem('user'))
    if(!user || user?.email) {
        return   <Navigate to="/Login" />
    }
    return(
        <div>
            {children}
        </div>
    )
    }
export default PrivateRouting;