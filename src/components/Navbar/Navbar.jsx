import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'



const Navbar = () => {


    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Portfolio', path: '/portfolio' },
        { id: 5, name: 'Contact', path: '/contact' },
      ];
      

    return (
        <nav className='bg-purple-500'>
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
                {/* <span>
                    {open===true?'open':'close'}
                </span> */}

                <span>
                    {
                    open===true? 
                    <XMarkIcon className="h-6 w-6" />
                    :   <Bars3Icon className="h-6 w-6" />
                    }
                </span>

            
            </div>
            <ul className={`md:flex duration-700 absolute pl-8 py-2 pb-4 rounded md:static bg-purple-300 ${open?'top-6':'-top-36'}`}>
                {
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;