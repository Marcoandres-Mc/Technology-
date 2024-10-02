
import Tabla from "../../Components/Tabla";
import AddItem from "../../Components/BtnEspecial";
import { bdProductos, propiedadesProductos } from "../../data/bdProductos.json";


const Ajustes = () => {
  
  return (
    <div className="m-10">  
      <h2 className="text-3xl m-2">Productos</h2>
      <div>
      <Tabla propiedadesBd={propiedadesProductos}  bd={bdProductos} edit='true' title={"produto"} eliminar='true'/>
      <div className={"my-5"}>
      <AddItem propiedadesBd={propiedadesProductos} type={"new"} titulo={"producto"}/>
      </div>
      
      </div>
    </div>
  );
}

export default Ajustes;