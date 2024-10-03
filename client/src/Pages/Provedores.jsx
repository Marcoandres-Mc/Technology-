import Tabla from "../Components/Tabla";

import { bdProvedores, propiedadesProvedores } from "../data/bdProvedor.json";
import BtnEspecial from "../Components/BtnEspecial";

import {Typography} from "@material-tailwind/react";



const Provedores = () => {
  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Provedores
      </Typography>
      <div>
        <Tabla propiedadesBd={propiedadesProvedores} bd={bdProvedores} edit="true" eliminar="true" />
        <div className="my-5">
          <BtnEspecial propiedadesBd={propiedadesProvedores} type="new" titulo="provedor"/>
        </div>
      </div>
    </div>
    
  )
}

export default Provedores;
