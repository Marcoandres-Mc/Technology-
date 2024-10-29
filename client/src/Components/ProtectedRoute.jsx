import { Navigate } from 'react-router-dom'

import { useAuth } from '../Context/AuthContext'


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {user} = useAuth();

    if(!user){
        return <Navigate to="/" />
      }
  return children
}

export default ProtectedRoute
