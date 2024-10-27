
import Tabla from '../Tablas/Tabla';

import BtnUser from "../../Components/Btn/BtnUser";

import {Typography} from '@material-tailwind/react';

import {getUsers} from '../../api/users';
import { useEffect, useState } from 'react';



const Usuarios = () => {
  const propiedades = ['nombre', 'email', 'password', 'date'];
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
        <Tabla propiedadesBd={propiedades} bd={usuarios} />
        <div className="my-5">
          <BtnUser propiedadesBd={propiedades} type="new" titulo="cuenta" genero="f" />
        </div>
      </div>
    </div>
  )
}

export default Usuarios;