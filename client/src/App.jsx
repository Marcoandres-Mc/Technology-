import { Route, Routes } from 'react-router-dom';
import Admins from './Pages/Cuentas/Admins';
import Usuarios from './Pages/Cuentas/Usuarios';
import Productos from './Pages/Productos/Productos';
import VentasProductos from './Pages/Productos/VentasProductos';
import ImportacionProductos from './Pages/Productos/ImportacionProductos';
import PaginaNoDisponible from './Pages/PaginaNoDisponible';
import Nav from './Components/Nav';
import Cuentas from './Pages/Cuentas/Cuentas';
import Menu from './Components/Menu';
import BotonMenu from './Components/BotonMenu';
import { useState } from 'react';
import Ajustes from './Pages/Productos/Ajustes';



import Provedores from './Pages/Provedores';







function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gray-300 h-full">
        <Menu className="hidden sm:block" isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="flex flex-col w-[100%] md:ml-[300px]">
          <Nav> 
            <BotonMenu  isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </Nav>
          <div className='h-full '>
            <Routes className="sm:w-full">
              <Route path="*" element={<PaginaNoDisponible />} />
              <Route path="/" element={<Admins />} />
              
              <Route path="/cuentas/*" element={<Cuentas/>}>
                <Route path="admins" element={<Admins />} />
                <Route path="usuarios" element={<Usuarios />} />
              </Route>

              <Route path="/productos/*" element={<Productos />}>
                <Route path="ajustes" element={<Ajustes />} />
                <Route path="ventas" element={<VentasProductos />} />
                <Route path="importacion" element={<ImportacionProductos />}/>

              </Route>
          
              
              <Route path="/provedores" element={<Provedores />} />
              
            </Routes>
          </div>
          </div>
       
        
      </div>
    </>
  );
}

export default App;