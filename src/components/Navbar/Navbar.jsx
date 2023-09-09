import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'



const Navbar = () => {


    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Portfolio', path: '/portfolio' },
        { id: 5, name: 'Contact', path: '/contact' },
    ];


    return (
        <nav className='bg-purple-500 flex flex-row justify-between'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {/* <span>
                    {open===true?'open':'close'}
                </span> */}

                <span>
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6" />
                            : <Bars3Icon className="h-6 w-6" />
                    }
                </span>
            </div>
            {/* <div>
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block w-full lg:w-48 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
                            // value={searchText}
                            // onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            // onClick={handleSearch}
                            className="hidden lg:block absolute inset-y-0 right-0 pr-3 pl-4 mt-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Search
                        </button>
                    </div>
                    <button
                        // onClick={handleSearch}
                        className="lg:hidden ml-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div> */}
            <ul className={`md:flex duration-700 absolute pl-8 py-2 pb-4 rounded md:static bg-purple-300 ${open ? 'top-6' : '-top-36'}`}>
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