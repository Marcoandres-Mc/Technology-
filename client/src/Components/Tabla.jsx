import { Card, Typography } from "@material-tailwind/react";
import BtnEspecial from "./BtnEspecial";
import {Button} from "@material-tailwind/react";


 
export function Tabla({propiedadesBd, bd, edit = false,eliminar= false, title}) {
  const propiedadesMin = propiedadesBd.map(propiedad => propiedad.toLowerCase());
  return (
    <Card className="h-full w-50 m-3">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {propiedadesBd.map((propiedadDb) => (
              <th key={propiedadDb} className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                <Typography
                  variant="small"
                  color="black"
                  className="font-normal leading-none text-center"
                >
                  {propiedadDb}
                </Typography>
              </th>
            ))}

            {edit && (
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3  text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none text-center"
                >
                  Editar
                </Typography>
              </th>
            )}
            {eliminar && (
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none text-center"
                >
                  Eliminar
                </Typography>
              </th>
            )}

          </tr>
        </thead>
        <tbody>
          {bd.map((item,index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              {
                propiedadesMin.map((propiedad) => (
                  <td key={propiedad} className="p-4 text-center">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item[propiedad]}
                    </Typography>
                  </td>
                ))
              }

              {edit && (
                <td className="p-4 text-center flex justify-center"> 
                  <BtnEspecial className={"bg-white"} propiedadesBd={propiedadesBd} titulo={title}/>
                </td>
                
              )}

              {eliminar && (
                <td className="p-4 text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <Button className="font-bold" >
                      <BtnEspecial className={"bg-white"} bd={propiedadesBd} titulo={title} type="delete"/>
                      
                    </Button>
                  </Typography>  
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Tabla;