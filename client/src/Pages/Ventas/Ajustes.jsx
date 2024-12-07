
import Tabla from "../../Components/Tabla";



import { useEffect, useState } from "react";
import {Typography} from "@material-tailwind/react";
import { getProducts } from "../../api/products.js";
import BtnProduct from "../../Components/Btn/Product/BtnProduct";
import { Spinner } from "@material-tailwind/react";



const Ajustes = () => {
  const propiedadesTb = ['nombre', 'categoria', 'marca', 'precio', 'stock'];
  const propiedades = ['nombre', 'marca', 'precio', 'stock', 'url', 'descripcion'];

  const categoria = ['laptops','celulares','gaming','componentes']
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="m-10">

      <Typography variant="h2" className="text-center">
        Productos
      </Typography>

      <div>
        {loading ? (
          <div className=" flex text-center justify-center ">
            <Spinner color="blue" size="xxl"  className="flex justify-center m-20 w-28 h-28"/>
          </div>
        ):(
          <>
            <Tabla propiedadesBd={propiedadesTb} bd={product} title={"Productos"}/>
            <div className="my-5">
              <BtnProduct propiedadesBd={propiedades} type="new" titulo="producto" genero="f" />
            </div>
          </>
        )}
        
      </div>
    </div>
  )

}

export default Ajustes;