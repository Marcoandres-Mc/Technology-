
import Tabla from '../../Components/Tabla';
import BtnEspecial from '../../Components/BtnEspecial';
import { bdUsuarios, propiedadesUsuarios } from '../../data/bdUsuario.json';



const Usuarios = () => {
  return (
    <div className="m-10">  
      <h2 className="text-3xl m-2">Usuarios</h2>
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