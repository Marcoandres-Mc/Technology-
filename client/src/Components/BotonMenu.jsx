import { IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function BotonMenu({ isDrawerOpen, toggleDrawer }) {


  
  return (
    <IconButton className='md:hidden' variant="text" size="lg" onClick={toggleDrawer}>
      {isDrawerOpen ? (
        <XMarkIcon className="h-8 w-8 stroke-2" />
      ) : (
        <Bars3Icon className="h-8 w-8 stroke-2" />
      )}
    </IconButton>
    

  );
}

export default BotonMenu;