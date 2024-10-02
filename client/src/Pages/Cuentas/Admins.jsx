
import Tabla from "../../Components/Tabla";

import { bdAdmins, propiedadesAdmins } from "../../data/bdAdmin.json";
import BtnEspecial from "../../Components/BtnEspecial";


const Admins = () => {

  return (
    <div className="m-10">  
      <h2 className="text-3xl m-2">Admins</h2>
      <div>
      <Tabla propiedadesBd={propiedadesAdmins}  bd={bdAdmins} edit='true' eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial  propiedadesBd={propiedadesAdmins} type={"new"} titulo={"cuenta"} genero={"f"}/>
      </div>
      
      </div>
    </div>
  );
}

export default Admins;