import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admins from './Pages/Cuentas/Admins';
import Usuarios from './Pages/Cuentas/Usuarios';
import Productos from './Pages/Productos/Productos';
import Create from './Pages/Productos/Create';
import Categorias from './Pages/Productos/Categorias';
import VentasProductos from './Pages/VentasProductos/VentasProductos';
import EstadisticasVentas from './Pages/VentasProductos/Estadisticas';
import GananciasVentas from './Pages/VentasProductos/Ganancias';
import ImportacionProductos from './Pages/ImportacionProductos/ImportacionProductos';
import EstadisticasImportacion from './Pages/ImportacionProductos/Estadisticas';
import GananciasImportacion from './Pages/ImportacionProductos/Ganancias';
import Reportes from './Pages/Reportes';
import Configuraciones from './Pages/Configuraciones';
import PaginaNoDisponible from './Pages/PaginaNoDisponible';
import Nav from './Components/Nav';
import Cuentas from './Pages/Cuentas/Cuentas';
import Menu from './Components/Menu';
import BotonMenu from './Components/BotonMenu';
import { useState } from 'react';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row ">
        <Menu className="hidden sm:block" isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="flex flex-col w-[100%] md:ml-[300px]">
          <Nav> 
            <BotonMenu  isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </Nav>
          <Routes className="sm:w-full">
            <Route path="*" element={<PaginaNoDisponible />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/cuentas" element={<Cuentas/>}>
              <Route path="admins" element={<Admins />} />
              <Route path="usuarios" element={<Usuarios />} />
            </Route>

            <Route path="/productos" element={<Productos />}>
              <Route path="create" element={<Create />} />
              <Route path="categorias" element={<Categorias />} />
            </Route>

            <Route path="/ventasProductos" element={<VentasProductos />}>
              <Route path="estadisticas" element={<EstadisticasVentas />} />
              <Route path="ganancias" element={<GananciasVentas />} />
            </Route>

            <Route path="/importacionProductos" element={<ImportacionProductos />}>
              <Route path="estadisticas" element={<EstadisticasImportacion />} />
              <Route path="ganancias" element={<GananciasImportacion />} />
            </Route>

            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuraciones" element={<Configuraciones />} />
          </Routes>
          </div>
       
        
      </div>
    </>
  );
}

export default App;