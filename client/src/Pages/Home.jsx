import SimpleCard from "../Components/SimpleCard";
import { Tabla } from "../Components/Tabla";


const Home = () => {
  const propiedadesUltimaOrdenes = ["Nombre", "Producto", "Precio", "Fecha"];
 
  const bdUltimaOrdenes = [
    {
      id: 1,
      nombre: "Alexa Liras",
      producto: "Iphone 13",
      precio: "$1000",
      fecha: "23/04/18",
    },
    {
      id: 2,
      nombre: "Alexa Liras",
      producto: "Iphone 13",
      precio: "$1000",
      fecha: "23/04/18",
    },
    {
      id: 3,
      nombre: "Alexa Liras",
      producto: "Iphone 13",
      precio: "$1000000000000000000000000",
      fecha: "23/04/18",
    },
  ];

  const propiedadesProductosMasVendidos = ["Nombre", "Cantidad"];

  const bdProductosMasVendidos = [
    {
      id: 1,
      nombre: "Iphone 13",
      cantidad: "100",
    },
    {
      id: 2,
      nombre: "Iphone 13",
      cantidad: "100",
    },
    {
      id: 3,
      nombre: "Iphone 13",
      cantidad: "100",
    },
  ];
  return (
    <>
    <h2>Home</h2>
    <h2>Finanzas</h2>
    <div className="flex flex-row flex-grow justify-center gap-5 ">
      
      <SimpleCard title={"Ventas"} description={"$100"}></SimpleCard>
      <SimpleCard title={"Gastos"} description={"$50"}></SimpleCard>
      <SimpleCard title={"Ganancia"} description={"$200"}></SimpleCard>


    </div>
    
    <div className="flex flex-row justify-center gap-5">
      <div>
        <h2>Ultimas ordenes</h2>
        <div className="flex flex-row flex-grow justify-center gap-5 ">
          <Tabla propiedadesBd={propiedadesUltimaOrdenes} bd={bdUltimaOrdenes}/>
        </div>
      </div>
      <div>
        <h2>Mas comprado</h2>
        <div className="flex flex-row flex-grow justify-center gap-5 ">
          <Tabla propiedadesBd={propiedadesProductosMasVendidos} bd={bdProductosMasVendidos} />
        </div>
      </div>
      
    </div>
    <div>
      <h2>Ultimos productos</h2>
      <div className="flex flex-row flex-grow justify-center gap-5 ">

      </div>
    </div>
    </>
  )
}

export default Home;