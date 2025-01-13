import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { registerAdmin, getAdmins, getAdmin, updateAdmin  } from '../../../api/auth';


import { useNavigate, useParams } from 'react-router-dom';



const BtnAdmin = ({type, titulo, genero,bd, n}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const propiedades = ['userName', 'email', 'password'];
    const letraInicial = genero === 'f' ? 'a' : 'o';
    const [letra] = useState(letraInicial);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit  = handleSubmit( async (data) => {
        console.log(data);
        await registerAdmin(data);

        navigate('/home');
        
        setTimeout(() => {
        navigate('/home/cuentas/admins'); 
        }, 20);
    });


return (
    <>
    <div className='flex justify-end'>
        <Button onClick={handleOpen} variant={type == "new"? "gradient" :"text" }>
            {type =="new"? "Nuev" + letraInicial + " " + titulo: 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"/>  
                </svg> 
            }
        </Button>
    </div>
    <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
                <Typography variant="h4" color="blue-gray">
                {type === 'new' ? `Agregar nuev${letra} ${titulo}` : `Editar ${titulo}`}
                </Typography>
                <IconButton
                size="sm"
                variant="text"
                className="!absolute right-3.5 top-3.5"
                onClick={handleOpen}>
                <XMarkIcon className="h-4 w-4 stroke-2" />
                </IconButton>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogBody className="space-y-4 pb-6">
                <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium">
                </Typography>
                <div>
                    {type === 'new' && propiedades.map((propiedad, index) => (
                        <div key={index} className='m-5'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium">
                        </Typography>

                        <label className="text-blue-gray-700 m-0 p-0" htmlFor={propiedad}>{propiedad}</label>

                        <Input
                            type='text'
                            {...register(propiedad, { required: true })}
                            color="gray"
                            size="lg"
                            placeholder=""
                            name={propiedad}
                            className="placeholder:opacity-100 focus:!border-t-gray-900"
                            containerProps={{
                            className: "!min-w-full",
                            }}
                            labelProps={{
                            className: "hidden",
                            }}
                        />
                        {errors[propiedad] && (
                            <Typography variant="small" color="red" className="mb-2 text-left font-medium">
                            Este campo es requerido
                            </Typography>
                        )}
                        </div>
                    ))}

                    {type === 'edit' && propiedades.map((propiedad, index) => (
                    <div key={index}>
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 text-left font-medium">
                        </Typography>

                        <label className="text-blue-gray-700" htmlFor={propiedad}>{propiedad}</label>

                        <Input
                        type='text'
                        {...register(propiedad, { required: true })}
                        color="gray"
                        size="lg"
                        placeholder=""
                        name={propiedad}
                        className="placeholder:opacity-100 focus:!border-t-gray-900"
                        containerProps={{
                            className: "!min-w-full",
                        }}
                        labelProps={{
                            className: "hidden",
                        }}
                        defaultValue={admin[propiedad]}
                        />
                        {errors[propiedad] && (
                        <Typography variant="small" color="red" className="mb-2 text-left font-medium">
                            Este campo es requerido
                        </Typography>
                        )}
                    </div>
                    ))}
                </div>
            </DialogBody>
            <DialogFooter>
                    <Button type='submit' className="ml-auto" onClick={handleOpen}>
                            Agregar {titulo}
                    </Button>
            </DialogFooter>
        </form>
    </Dialog>
    </>
    
)
}


export default BtnAdmin;