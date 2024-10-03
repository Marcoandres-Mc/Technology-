import ProfileMenu from "./ProfileMenu";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";




const Nav = ({children}) => {
  return (
    <>
        <nav className="w-full sticky h-25" style={{ backgroundColor: '#5edee7' }}>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="w-full flex flex-row lg:justify-end justify-between text-white ">
                {children}
                <div className="p-2 hidden md:block">
                  <Input className=" bg-white border-black" icon={<MagnifyingGlassIcon className="h-5 w-5 " />} label="Search" />
                </div>
                
              <ProfileMenu />
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nav;