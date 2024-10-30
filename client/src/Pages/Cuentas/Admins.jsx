
import { useState, useEffect } from 'react';
import Tabla from '../../Components/Tabla';

<<<<<<< HEAD
import BtnAdmin from "../../Components/Btn/BtnAdmin";
=======
import BtnAdmin from "../../Components/Btn/Admin/BtnAdmin";
>>>>>>> committ
import { getAdmins } from '../../api/auth';



import {Typography} from "@material-tailwind/react";


const Admins = () => {
  const propiedadesTb = ['userName', 'email', 'date'];
  const propiedades = ['userName', 'email', 'password'];
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
<<<<<<< HEAD
        <Tabla propiedadesBd={propiedadesTb} bd={admins}/>
=======
        <Tabla propiedadesBd={propiedadesTb} bd={admins} title={"Admins"}/>
>>>>>>> committ
        <div className="my-5">
          <BtnAdmin propiedadesBd={propiedades} type="new" titulo="cuenta admin" genero="f" />
        </div>
      </div>
    </div>
  );
}

export default Admins;