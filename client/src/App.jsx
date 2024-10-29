import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';

import Home from './Home';
import { AuthProvider } from './Context/AuthContext';



function App() {



  return (
    <>
      <AuthProvider>
        <div className='h-full '>
          <Routes className="sm:w-full">        
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home*" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
              } />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;