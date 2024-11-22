import { useState } from "react";

const Navbar = () => {

    const [show, setShow] = useState(false);


    const handleClick = () => {
         setShow(!show); 
         
    };

    let menuActive = show ? "left-0" : "-left-full";

  return (
    <div className="navbar fixed transition-all w-full py-4">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-2xl font-bold">Website</h1>
                </div>
                <ul className={`flex lg:gap-12 md:flex-row md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2  -translate-y-1/2 flex-col px-8 py-6 sm:rounded-shadow shadow-lime-500 bg-lime-200 font-bold text-black transition-all`}> 
                    <li className="flex items-center gap-3">
                        <i className="ri-home-2-line text-2xl md:hidden block"></i>
                        <a href="#" className="opacity-75 font-medium">Beranda</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-information-2-line text-2xl md:hidden block"></i>
                        <a href="#" className="opacity-75 font-medium">Tentang</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-service-line text-2xl md:hidden block"></i>
                        <a href="#" className="opacity-75 font-medium">Layanan</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-info-card-line text-2xl md:hidden block"></i>
                        <a href="#" className="opacity-75 font-medium">Project</a>
                    </li> 
                </ul>
                <div className="social flex items-center gap-2">
                    <a href="#" className="bg-lime-500 text-white font-bold rounded-full px-5 py-2 hover:bg-lime-600 transition-all">Social Media </a>
                    <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar