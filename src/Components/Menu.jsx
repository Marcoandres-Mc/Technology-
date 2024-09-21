import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  TruckIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export function Menu({isDrawerOpen}) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  
  const categorias = [
    {
        id: 1,
        nombre: 'Home',
        icon: HomeIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Home',
                url: '/home'
            },
            {
                id: 2,
                nombre: 'Homee',
                url: '/homee'
            }
        ]
    },
    {
        id: 2,
        nombre: 'Cuentas',
        icon: PresentationChartBarIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Cuentas',
                url: '/cuentas'
            },
            {
                id: 2,
                nombre: 'Admins',
                url: '/cuentas/admins'
            },
            {
                id: 3,
                nombre: 'Usuarios',
                url: '/cuentas/usuarios'
            }
        ]   
    },
    {
        id: 3,
        nombre: 'Productos',
        icon: ShoppingBagIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Productos',
                url: '/productos'
            },
            {
                id: 2,
                nombre: 'Create',
                url: '/productos/create'
            },
            {
                id: 3,
                nombre: 'Categorias',
                url: '/productos/categorias'
            }
        ]   
    },
    {
        id: 4,
        nombre: 'Ventas de Productos',
        icon: ChartBarIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Ventas de Productos',
                url: '/ventasProductos'
            },
            {
                id: 2,
                nombre: 'Estadísticas de Ventas',
                url: '/ventasProductos/estadisticas'
            },
            {
                id: 3,
                nombre: 'Ganancias de Ventas',
                url: '/ventasProductos/ganancias'
            }
        ]
    },
    {
        id: 5,
        nombre: 'Importación de Productos',
        icon: TruckIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Importación de Productos',
                url: '/importacionProductos'
            },
            {
                id: 2,
                nombre: 'Estadísticas de Importación',
                url: '/importacionProductos/estadisticas'
            },
            {
                id: 3,
                nombre: 'Ganancias de Importación',
                url: '/importacionProductos/ganancias'
            }
        ]
    },
    {
        id: 6,
        nombre: 'Reportes',
        icon: CogIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Reportes',
                url: '/reportes'
            }
        ]
    },
    {
        id: 7,
        nombre: 'Configuraciones',
        icon: CogIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Configuraciones',
                url: '/configuraciones'
            }
        ]
    }
];
 
  return (
    <div className="h-0 sm:h-[100%] ">
        <Drawer className=" mt-[75px] md:m-0 sm:p-0 h-full" open={isDrawerOpen} onClose={() => {}} overlay={false} >
            <Card className="w[250px] shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                <Typography variant="h5" color="blue-gray">
                Sidebar
                </Typography>
            </div>
            
            <List>
                {categorias.map((categoria) => (
                    <Accordion
                    key={categoria.id}
                    open={open === categoria.id}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === categoria.id ? "rotate-180" : ""}`}
                        />
                    }>
                        <ListItem className="p-0" selected={open === categoria.id}>
                            <AccordionHeader onClick={() => handleOpen(categoria.id)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <categoria.icon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                {categoria.nombre}
                            </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                {categoria.subcategorias.map((subcategoria) => (
                                        <NavLink key={subcategoria.id} to={subcategoria.url} className=''>
                                            <ListItem>
                                                <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                {subcategoria.nombre}   
                                            </ListItem>
                                        </NavLink>
                                    ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))
            }

                <hr className="my-2 border-blue-gray-50" />
                </List>
            </Card>
        </Drawer>
      


    </div>
  );
}

export default Menu;




















