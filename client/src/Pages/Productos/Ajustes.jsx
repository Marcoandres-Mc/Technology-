
import Tabla from "../../Components/Tabla";



import { useEffect, useState } from "react";
import {Typography} from "@material-tailwind/react";
import { getProducts } from "../../api/products.js";
import BtnProduct from "../../Components/Btn/Product/BtnProduct";




const Ajustes = () => {
  const propiedadesTb = ['nombre', 'categoria', 'marca', 'precio', 'stock'];
  const propiedades = ['nombre', 'categoria', 'marca', 'precio', 'stock', 'url', 'descripcion'];

  const categoria = ['laptops','celulares','gaming','componentes']
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

      <Typography variant="h2" className="text-center">
        Productos
      </Typography>

      <div>

        <Tabla propiedadesBd={propiedadesTb} bd={product} title={"Productos"}/>
        <div className="my-5">
          <BtnProduct propiedadesBd={propiedades} type="new" titulo="producto" genero="f" />
        </div>
      </div>
    </div>
  )

}

export default Ajustes;