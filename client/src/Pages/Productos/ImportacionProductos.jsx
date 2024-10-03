
import Tabla from "../../Components/Tabla";
import  BtnEspecial from "../../Components/BtnEspecial";

import { bdImportacionProductos, propiedadesImportacionProductos } from "../../data/bdImportacionProductos.json";

import {Typography} from "@material-tailwind/react";


const ImportacionProductos = () => {


  return (
    <div className="m-10">  
      <Typography variant="h2" className="text-center">
        Importacion de productos
      </Typography>
      <div>
      <Tabla propiedadesBd={propiedadesImportacionProductos}  bd={bdImportacionProductos} edit='true' title={"venta de productos"} eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial propiedadesBd={propiedadesImportacionProductos} type={"new"} titulo={"producto"} genero={"f"} />
      </div>
      
      </div>
    </div>
  );
}

export default ImportacionProductos;