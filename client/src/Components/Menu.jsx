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

import { Navigate, NavLink } from "react-router-dom";




export function Menu({isDrawerOpen}) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  
  const categorias = [
    {
        id: 0,     
        nombre: 'home',
        icon: HomeIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Inicio',
                url: 'home'
            }
        ],
    },
    {

        id: 1,
        nombre: 'Cuentas',
        icon: PresentationChartBarIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Admins',
                url: 'home/cuentas/admins'
            },
            {
                id: 2,
                nombre: 'Usuarios',
                url: 'home/cuentas/usuarios'
            }
        ]   
    },
    {
        id: 2,
        nombre: 'Productos',
        icon: ShoppingBagIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Ajustes',
                url: '/productos/ajustes'

            },
            {
                id: 2,
                nombre: 'Ventas de Productos',
                url: '/productos/ventas'
            },
            {
                id: 3,
                nombre: 'Importación de Productos',
                url: '/productos/importacion'
            },
        ]   
    },

    {
        id: 3,
        nombre: 'Provedores',
        icon: CogIcon,
        subcategorias: [
            {
                id: 1,
                nombre: 'Provedores',
                url: '/provedores'
            }
        ]
    },
    {
        id: 4,
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
    <div className="h-0 sm:h-[100%] bg-blue-gray-400" >
        <Drawer className=" mt-[75px] md:m-0 sm:p-0 h-full " style={{ backgroundColor: '#417280' }} open={isDrawerOpen} onClose={() => {}} overlay={false} >
            <Card className="w[250px] shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 flex items-center gap-4 p-6" style={{ backgroundColor: '#417280' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="35px" height="35px" viewBox="0 0 227.000000 259.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,259.000000) scale(0.100000,-0.100000)" fill="#ffff" stroke="none">
                    <path d="M910 2455 c-167 -47 -287 -192 -298 -360 l-4 -73 -112 -4 c-96 -3 -118 -8 -162 -30 -59 -31 -109 -84 -136 -145 -15 -35 -34 -187 -90 -741 -47 -459 -68 -714 -64 -744 15 -100 106 -203 208 -233 77 -23 1679 -23 1756 0 102 31 193 133 208 233 5 31 -17 282 -64 743 -76 753 -75 746 -142 823 -18 20 -56 49 -84 64 -48 25 -61 27 -206 30 -160 4 -170 7 -170 47 0 35 -57 143 -101 190 -24 26 -63 58 -88 72 -25 14 -69 41 -98 60 -109 73 -243 98 -353 68z m205 -49 l40 -13 -57 -8 c-115 -15 -244 -101 -302 -200 -14 -23 -33 -70 -42 -103 -17 -62 -17 -62 -55 -62 -21 0 -40 4 -44 9 -3 6 -1 40 5 78 24 149 130 270 267 302 55 13 142 11 188 -3z m117 -76 c69 -20 134 -129 145 -244 l6 -66 -297 0 -298 0 7 33 c16 80 72 163 150 223 69 53 201 77 287 54z m223 -161 c18 -28 55 -126 55 -146 0 -2 -17 -3 -39 -3 l-38 0 -7 66 c-4 36 -15 88 -26 116 l-19 51 26 -24 c14 -13 36 -40 48 -60z m-1011 -236 c-77 -77 -75 -66 -153 -839 -68 -674 -70 -702 -56 -758 16 -61 59 -132 97 -160 23 -17 22 -17 -25 -12 -123 14 -217 118 -217 241 1 28 31 352 69 720 75 740 72 721 150 786 44 38 91 57 139 58 l33 1 -37 -37z m296 -88 l0 -125 -32 0 c-42 0 -63 -13 -55 -34 5 -13 24 -16 111 -16 79 0 105 3 109 14 8 21 -13 36 -50 36 l-33 0 0 125 0 125 360 0 360 0 0 -125 0 -125 -34 0 c-35 0 -63 -21 -51 -40 4 -6 49 -10 110 -10 61 0 106 4 110 10 12 19 -16 40 -51 40 l-34 0 0 125 0 125 73 0 c59 0 83 -5 126 -26 55 -28 102 -81 120 -137 19 -55 151 -1408 142 -1447 -17 -77 -68 -141 -138 -176 -36 -18 -73 -19 -717 -22 -611 -2 -685 -1 -730 14 -68 23 -131 89 -152 160 -15 52 -13 75 56 755 51 506 75 710 86 732 52 102 125 147 241 147 l73 0 0 -125z"/>
                    <path d="M1215 689 c-15 -23 14 -30 111 -27 80 2 99 6 99 18 0 12 -19 16 -102 18 -67 2 -104 -1 -108 -9z"/>
                    <path d="M1465 690 c-16 -25 14 -30 196 -30 182 0 189 1 189 20 0 19 -7 20 -189 20 -116 0 -192 -4 -196 -10z"/>
                    <path d="M1215 539 c-16 -25 18 -29 201 -27 160 3 189 5 189 18 0 13 -29 15 -192 18 -132 2 -194 -1 -198 -9z"/>
                    <path d="M1685 540 c-14 -22 10 -30 86 -30 72 0 79 2 79 20 0 18 -7 20 -79 20 -44 0 -83 -4 -86 -10z"/>
                    <path d="M1220 395 c-26 -31 0 -35 210 -35 210 0 236 4 210 35 -10 12 -49 15 -210 15 -161 0 -200 -3 -210 -15z"/>
                </g>
            </svg>
            <Typography color="white" className="font-bold text-2xl " >Technology +</Typography>

            </div>
            
            <List className="w-full">
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
                                        <NavLink key={subcategoria.id} to={`/${subcategoria.url}`} className=''>
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




















