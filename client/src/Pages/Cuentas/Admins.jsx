
import Tabla from '../Tablas/Tabla';

import { bdAdmins, propiedadesAdmins } from "../../data/bdAdmin.json";
import BtnUser from "../../Components/Btn/BtnUser";


import {Typography} from "@material-tailwind/react";


const Admins = () => {

  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Admins
      </Typography>
      <div>
        <Tabla propiedadesBd={propiedadesAdmins} bd={bdAdmins} edit="true" eliminar="true" />
        <div className="my-5">
          <BtnUser bd={propiedadesAdmins} type="new" titulo="cuenta" genero="f" />
        </div>
      </div>
    </div>
  );
}

export default Admins;