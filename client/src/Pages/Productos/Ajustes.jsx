
import Tabla from "../../Components/Tabla";
import BtnEspecial from "../../Components/BtnEspecial";
import { bdProductos, propiedadesProductos } from "../../data/bdProductos.json";
import {Typography} from "@material-tailwind/react";


const Ajustes = () => {
  
  return (
    <div className="m-10">  
      <Typography variant="h2" className="text-center">
        Productos
      </Typography>
      <div>
      <Tabla propiedadesBd={propiedadesProductos}  bd={bdProductos} edit='true' title={"produto"} eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial propiedadesBd={propiedadesProductos} type={"new"} titulo={"producto"}/>
      </div>
      
      </div>
    </div>
  );
}

export default Ajustes;