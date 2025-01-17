
import Tabla from "../../Components/Tabla";
import {Typography} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { getSedes } from "../../api/sedes.js";
import BtnSedes from "../../Components/Btn/Sedes/BtnSedes.jsx";


const Sedes = () => {
  const propiedadesTb = ['nombre', 'direccion', 'ciudad', 'telefono', 'url'];
  const propiedades = ['nombre', 'direccion', 'ciudad', 'telefono'];

  const [loading, setLoading] = useState(true);
  const [sedes, setSedes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getSedes();
        setSedes(data);
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
        Sedes
      </Typography>
      <div>
        {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
          <Tabla propiedadesBd={propiedades} bd={sedes} title={"Sedes"}/>
          <div className="my-5">
            <BtnSedes propiedadesBd={propiedadesTb} type="new" titulo="sedes" genero="f"/>
          </div>
          </>
        )}
      </div>

    </div>
  );
}

export default Sedes;