import React, { useState } from 'react'
import { FiMenu, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const Nav = () => {
    let Links = [
        { name: "Beranda", link: "/" },
        { name: "Produk", link: "/produk" },
        { name: "Bahan Baku", link: "/bahanbaku" },
        { name: "Laporan", link: "/laporan" },
        { name: <FiSettings />, link: "/setting" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-rose-900 py-4 md:px-16 px-8'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                    <Link to="/">
                        <img src={logo} alt="logo" width="150" height="150"></img>
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <span className="text-white">
                        {open ? <FiMenu /> : <FiMenu />}
                    </span>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                                <Link to={link.link} className='text-white hover:font-bold duration-100'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav