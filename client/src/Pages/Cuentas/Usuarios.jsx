
import Tabla from '../../Components/Tabla';

import BtnUser from "../../Components/Btn/User/BtnUser";

import {Typography} from '@material-tailwind/react';

import {getUsers} from '../../api/users';
import { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { data } from 'autoprefixer';




const Usuarios = () => {
  const propiedadesTb = ['nombre', 'email', 'date'];
  const propiedades = ['nombre', 'email', 'password'];
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsuarios(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Usuarios
      </Typography>
      <div>
        {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
          <Tabla propiedadesBd={propiedadesTb} bd={usuarios} title={"Usuarios"}/>
          <div className="my-5">
            <BtnUser propiedadesBd={propiedades} type="new" titulo="cuenta" genero="f" />
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Usuarios;