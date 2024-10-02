
import Tabla from "../../Components/Tabla";
import AddItem from "../../Components/AddItem";


const VentasProductos = () => {
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
      nombre: "Carlos Perez",
      producto: "Samsung Galaxy S21",
      precio: "$850",
      fecha: "12/05/19",
    },
    {
      id: 3,
      nombre: "Maria Lopez",
      producto: "MacBook Pro",
      precio: "$2500",
      fecha: "30/06/20",
    },
    {
      id: 4,
      nombre: "Juan Martinez",
      producto: "Sony WH-1000XM4",
      precio: "$350",
      fecha: "15/07/21",
    },
    {
      id: 5,
      nombre: "Ana Gomez",
      producto: "iPad Pro",
      precio: "$1200",
      fecha: "22/08/22",
    },
    {
      id: 6,
      nombre: "Luis Fernandez",
      producto: "Google Pixel 6",
      precio: "$700",
      fecha: "10/09/22",
    },
    {
      id: 7,
      nombre: "Elena Rodriguez",
      producto: "Dell XPS 13",
      precio: "$1500",
      fecha: "05/10/21",
    },
    {
      id: 8,
      nombre: "Miguel Sanchez",
      producto: "PlayStation 5",
      precio: "$500",
      fecha: "20/11/20",
    },
    {
      id: 9,
      nombre: "Laura Torres",
      producto: "Xbox Series X",
      precio: "$500",
      fecha: "25/12/20",
    },
    {
      id: 10,
      nombre: "Pedro Ramirez",
      producto: "Apple Watch Series 7",
      precio: "$400",
      fecha: "15/01/23",
    },
  ];

  return (
    <div className="m-10">  
      <h2 className="text-3xl m-2">Productos vendidos</h2>
      <div>
      <Tabla propiedadesBd={propiedadesUltimaOrdenes}  bd={bdUltimaOrdenes} edit='true' />
      <div className={"my-5"}>
      <AddItem  propiedadesBd={propiedadesUltimaOrdenes} type={"new"} titulo={"cuenta"} genero={"f"}/>
      </div>
      
      </div>
    </div>
  );
}

export default VentasProductos;