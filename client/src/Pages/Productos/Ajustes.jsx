
import Tabla from "../../Components/Tabla";
<<<<<<< HEAD
import BtnEspecial from "../../Components/BtnEspecial";
import { bdProductos, propiedadesProductos } from "../../data/bdProductos.json";
import {Typography} from "@material-tailwind/react";


const Ajustes = () => {
  
  return (
    <div className="m-10">  
=======

import { useEffect, useState } from "react";
import {Typography} from "@material-tailwind/react";
import { getProducts } from "../../../../server/controllers/product.controllers";
import BtnProduct from "../../Components/Btn/Product/BtnProduct";



const Ajustes = () => {
  const propiedadesTb = ['nombre', 'categoria', 'marca', 'precio', 'stock', 'url', 'descripcion'];
  const propiedades = ['nombre', 'categoria', 'marca', 'precio', 'stock', 'url', 'descripcion'];
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProduct(data);
    };
    fetchData();
  } , []);
  return (
    <div className="m-10">
>>>>>>> committ
      <Typography variant="h2" className="text-center">
        Productos
      </Typography>
      <div>
<<<<<<< HEAD
      <Tabla propiedadesBd={propiedadesProductos}  bd={bdProductos} edit='true' title={"produto"} eliminar='true'/>
      <div className={"my-5"}>
      <BtnEspecial propiedadesBd={propiedadesProductos} type={"new"} titulo={"producto"}/>
      </div>
      
      </div>
    </div>
  );
=======
        <Tabla propiedadesBd={propiedadesTb} bd={product} title={"Productos"}/>
        <div className="my-5">
          <BtnProduct propiedadesBd={propiedades} type="new" titulo="producto" genero="f" />
        </div>
      </div>
    </div>
  )
>>>>>>> committ
}

export default Ajustes;