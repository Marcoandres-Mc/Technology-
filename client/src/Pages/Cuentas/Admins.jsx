
import { useState, useEffect } from 'react';
import Tabla from '../../Components/Tabla';

import BtnUser from "../../Components/Btn/BtnUser";
import { getAdmins } from '../../api/auth';



import {Typography} from "@material-tailwind/react";


const Admins = () => {
  const propiedadesTb = ['nombre', 'email', 'date'];
  const propiedades = ['nombre', 'email', 'password'];
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdmins();
      setAdmins(data);
    };
    fetchData();
  } , []);
  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Admins
      </Typography>
      <div>
        <Tabla propiedadesBd={propiedadesTb} bd={admins}/>
        <div className="my-5">
          <BtnUser propiedadesBd={propiedades} type="new" titulo="cuenta" genero="f" />
        </div>
      </div>
    </div>
  );
}

export default Admins;