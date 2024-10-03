
import Tabla from '../../Components/Tabla';
import BtnEspecial from '../../Components/BtnEspecial';
import { bdUsuarios, propiedadesUsuarios } from '../../data/bdUsuario.json';

import {Typography} from '@material-tailwind/react';



const Usuarios = () => {
  return (
    <div className="m-10">  
      <Typography variant="h2" className="text-center">
        Usuarios
      </Typography>
      <div>
      <Tabla propiedadesBd={propiedadesUsuarios}  bd={bdUsuarios} edit='true' eliminar='true'/>
      
      <div className={"my-5"}>
        <BtnEspecial propiedadesBd={propiedadesUsuarios} type={"new"} titulo={"cuenta"} genero={"f"} />
      </div>
      </div>
    </div>
  )
}

export default Usuarios;