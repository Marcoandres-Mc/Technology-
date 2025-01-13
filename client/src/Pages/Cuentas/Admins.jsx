
import { useState, useEffect } from 'react';
import Tabla from '../../Components/Tabla';

import BtnAdmin from "../../Components/Btn/Admin/BtnAdmin";
import { getAdmins } from '../../api/auth';
import { Spinner } from '@material-tailwind/react';


import {Typography} from "@material-tailwind/react";



const Admins = () => {
  const propiedadesTb = ['userName', 'email', 'password'];
  const propiedades = ['userName', 'email', 'date'];
  
  const [loading, setLoading] = useState(true);
  const [admins, setAdmins] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAdmins();
        setAdmins(data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="m-10">
      <Typography variant="h2" className="text-center">
        Admins
      </Typography>
      <div>
      {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
        <Tabla propiedadesBd={propiedades} bd={admins} title={"Admins"}/>
        <div className="my-5">
          <BtnAdmin propiedadesBd={propiedadesTb} type="new" titulo="cuenta admin" genero="f" />
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default Admins;