
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { navLinks } from '../constants';
import logo from '../assets/logo.png';

import menu from '../assets/menu.svg';
import close from '../assets/close.svg';



export default function Navbar() {

    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);


    return (
        <>
            <nav className='w-full flex py-6 justify-between items-center navbar mx-auto max-w-5xl' >
                <img src={logo} alt='logo' className='w-[124px] h-[32p] ml-5' />
                <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-theoblue'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-normal cursor-pointer text-[48px] ${active === nav.title ? "text-theoblue" : "text-theoblue"
                            } ${index === navLinks.length - 1 ? "mr-5" : "mr-10"}`}
                            onClick={() => setActive(nav.title)}
                        >

                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 items-center justify-end'>
                    <img src={toggle ? close : menu} alt='menu' className='w-[48px] h-[48px] cursor-pointer object-contain fill-theoblue' onClick={() => setToggle((prev) => !prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} bg-theoblue p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex justify-end items-center flex-1'>
                            {navLinks.map((nav, index) => (
                                <li key={nav.id} className={`font-normal cursor-pointer text-[48px] ${active === nav.title ? "text-white" : "text-white"
                                    } ${index === navLinks.length - 1 ? "mr-5" : "mr-10"}`}
                                    onClick={() => setActive(nav.title)}
                                >

                                    <a href={`${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}