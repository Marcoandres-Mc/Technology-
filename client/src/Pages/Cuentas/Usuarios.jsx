
import Tabla from '../../Components/Tabla';

<<<<<<< HEAD
import BtnUser from "../../Components/Btn/BtnUser";
=======
import BtnUser from "../../Components/Btn/User/BtnUser";
>>>>>>> committ

import {Typography} from '@material-tailwind/react';

import {getUsers} from '../../api/users';
import { useEffect, useState } from 'react';



const Usuarios = () => {
  const propiedadesTb = ['nombre', 'email', 'date'];
  const propiedades = ['nombre', 'email', 'password'];
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsuarios(data);
    };
    fetchData();
  } , []);
  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Usuarios
      </Typography>
      <div>
<<<<<<< HEAD
        <Tabla propiedadesBd={propiedadesTb} bd={usuarios} />
=======
        <Tabla propiedadesBd={propiedadesTb} bd={usuarios} title={"Usuarios"}/>
>>>>>>> committ
        <div className="my-5">
          <BtnUser propiedadesBd={propiedades} type="new" titulo="cuenta" genero="f" />
        </div>
      </div>
    </div>
  )
}

export default Usuarios;