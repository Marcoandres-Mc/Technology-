
import Tabla from "../../Components/Tabla";
import BtnEspecial from "../../Components/BtnEspecial";
import { bdVentaProductos, propiedadesVentaProductos } from "../../data/bdVentaProductos.json";


const VentasProductos = () => {
  

  return (
    <div className="m-10">  
      <h2 className="text-3xl m-2">Productos</h2>
      <div>
      <Tabla propiedadesBd={propiedadesVentaProductos}  bd={bdVentaProductos} edit='true' title={"venta de productos"} eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial  propiedadesBd={propiedadesVentaProductos} type={"new"} titulo={"producto"} genero={"f"}/>
      </div>
      
      </div>
    </div>
  );
}

export default VentasProductos;