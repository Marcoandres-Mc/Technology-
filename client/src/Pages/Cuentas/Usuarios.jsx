
import Tabla from '../../Components/Tabla';

import BtnUser from "../../Components/Btn/User/BtnUser";

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
        <Tabla propiedadesBd={propiedadesTb} bd={usuarios} title={"Usuarios"}/>
        <div className="my-5">
          <BtnUser propiedadesBd={propiedades} type="new" titulo="cuenta" genero="f" />
        </div>
      </div>
    </div>
  )
}

export default Usuarios;