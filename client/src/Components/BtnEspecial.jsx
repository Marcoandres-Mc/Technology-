import React, { useState } from 'react';


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


 
export function BtnEspecial({type, propiedadesBd, titulo,genero}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  propiedadesBd.map(propiedad => propiedad.toLowerCase());
  const letraInicial = genero === 'f' ? 'a' : 'o';
  const [letra] = useState(letraInicial);

  return (
    <>
    <div className='flex justify-end'>
    {type === 'delete' ? 
      <Button  onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </Button>
    :
      <Button  onClick={handleOpen} variant={type == "new"? "gradient" :"text" }>
        {type =="new"? "Nuev" + letraInicial + " " + titulo: 
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-6">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"/>  
          </svg> 
        }
      </Button>
    }
    </div>
        <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
          <DialogHeader className="relative m-0 block">

            {type === 'delete' ?  
            <Typography variant="h4" color="blue-gray">
              ¿Estás seguro de que deseas eliminar este {titulo}?
            </Typography>
            :
            <div>
              <Typography variant="h4" color="blue-gray">
                {type === 'new' ? `Agregar nuev${letra} ${titulo}` : `Editar ${titulo}`}
              </Typography><IconButton
                size="sm"
                variant="text"
                className="!absolute right-3.5 top-3.5"
                onClick={handleOpen}>
                  <XMarkIcon className="h-4 w-4 stroke-2" />
                </IconButton>
            </div>
            }  
          </DialogHeader>

          {type === 'delete' ?  
          <DialogFooter className='flex justify-between'>
            <Button color="blue-gray" onClick={handleOpen}>
              Cancelar
            </Button>

            <Button color="red" onClick={handleOpen}>
              Eliminar {titulo}
            </Button>
          </DialogFooter>  
          
          :
          <div>
          <DialogBody className="space-y-4 pb-6">
              {propiedadesBd.map((propiedadBd, index) => (
              <div key={index}>
                  <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                  >
                  {propiedadBd}
                  </Typography>
                  <Input
                  color="gray"
                  size="lg"
                  placeholder=""
                  name="name"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                      className: "!min-w-full",
                  }}
                  labelProps={{
                      className: "hidden",
                  }}
                  />
              </div>
              ))}
          </DialogBody>
          <DialogFooter>
            <Button className="ml-auto" onClick={handleOpen}>
              Agregar {titulo}
            </Button>
          </DialogFooter>
          </div>
          
          
          }

        </Dialog>
      
    </>
  );
}

export default BtnEspecial;