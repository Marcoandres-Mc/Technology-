
const carritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
        setTotal(total + producto.price);
    }

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(newCarrito);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
    }

    return (
        <carritoContext.Provider value={{ carrito, total, agregarProducto, eliminarProducto, vaciarCarrito }}>
            {children}
        </carritoContext.Provider>
    )
    //sfsdfsdfdsf
}
