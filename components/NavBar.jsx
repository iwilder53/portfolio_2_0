"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import LanguageButton from './LanguageButton'

const navLinks = [{
    title: "僕について",
    path: "#about"
}, {
    title: "プロジェクト",
    path: "#projects"
}, {
    title: "連絡を取る",
    path: "#contact "
},
]
const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 right-0 left-0 z-10 mt-4 ml-4 bg-[#121212] bg-opacity-90 ">
            <div className="flex flex-wrap items-stretch justify-between mx-auto px-4 py-2">
                <div className="flex flex-col ">
                    <Link className="text-2xl md:text-5xl text-white font-semibold" href="/"> Y Bagaria </Link>
                    <p className="text-l md:text-xl text-white font-light" href="/"> ソフトウェアエンジニア</p>
                </div>
                <div className="mobile-menu block md:hidden">

                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex item-center px-3 py-2 hover:text-white hover:border-white text-slate-200 "><Bars3Icon className='h-5 w-5'></Bars3Icon></button>
                    ) : (<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white " > <XMarkIcon className='h-5 w-5'></XMarkIcon> </button>
                    )


                    }
                </div>

                <div className=" menu hidden md:block md:w-auto " id="navbar">
                    <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 " >
                        {navLinks.map((link, index) =>
                            <li key={index}><NavLink href={link.path} title={link.title} /></li>

                        )}
                    </ul>

                </div>

            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav >
    )
}

export default NavBar