import { useState } from "react"
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi"
import { MdClose } from "react-icons/md"
import { BsArrowRightShort } from "react-icons/bs";


interface ToolbarProps {
    dark?: boolean;
}

const Toolbar = ({ dark }: ToolbarProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`text-xl absolute top-0 left-0 justify-center text-center w-full p-0 lg:p-3 flex z-50 backdrop-blur-md ${dark ? "text-white" : "text-black"}`}>

            <div className="z-20 p-5 pr-5 lg:pr-0 xl:pr-5 w-full flex justify-between items-center font-medium">

                <nav className={`hidden lg:flex flex-row flex-grow justify-center items-stretch`} >

                    <div className="flex flex-grow space-x-8 items-center justify-start">
                        <a href="/" className="hidden lg:block mr-5 transform hover:scale-105 transition-all duration-500 ease-in-out">
                            <img src={`${dark ? "/Logos/lumix-logo-weiß.png" : "/Logos/lumix-logo-schwarz.png"}`} className={`w-44`} />
                        </a>
                    </div>

                    <div className="flex flex-grow space-x-7 xl:space-x-10 items-center justify-end mr-5">
                        <Link href={`/photovoltaik`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Photovoltaik</a>
                        </Link>
                        <Link href={`/produkte`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Produkte</a>
                        </Link>
                        <Link href={`/gewerbe`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Gewerbe</a>
                        </Link>
                        <Link href={`/rendite`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Rendite</a>
                        </Link>
                        <Link href={`/team`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Team</a>
                        </Link>
                        <Link href={`/karriere`}>
                            <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Karriere</a>
                        </Link>
                        <Link href={`/konfigurator`}>
                            <a className="flex space-x-1 items-center bg-yellow-400 text-black hover:scale-105 transition duration-200 ease-linear px-4 py-1 rounded-full">
                                <p className="">Angebot</p>
                                <BsArrowRightShort className="text-3xl" />
                            </a>
                        </Link>
                    </div>
                </nav>

                <a href="/" className="block lg:hidden transform hover:scale-110 transition-all duration-500 ease-in-out">
                    <img src={`${dark ? "/Logos/lumix-logo-weiß.png" : "/Logos/lumix-logo-schwarz.png"}`} className={`w-32`} />
                </a>

                <button className={`block float-right lg:hidden transform hover:scale-110 transition duration-300 ease-in-out`} onClick={() => setOpen(!open)}>
                    {open ? <MdClose size={34} /> : <HiMenuAlt4 size={34} />}
                </button>
            </div>

            <nav onClick={() => setOpen(!open)} className={`${!open && "hidden"} p-5 top-0 fixed w-full backdrop-filter backdrop-blur-xl flex flex-col space-y-5 items-center pt-20`} >
                <Link href={`/photovoltaik`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Photovoltaik</a>
                </Link>
                <Link href={`/produkte`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Produkte</a>
                </Link>
                <Link href={`/gewerbe`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Gewerbe</a>
                </Link>
                <Link href={`/rendite`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Rendite</a>
                </Link>
                <Link href={`/team`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Team</a>
                </Link>
                <Link href={`/karriere`}>
                    <a className="hover:text-yellow-400 transition duration-300 ease-in-out">Karriere</a>
                </Link>
                <Link href={`/konfigurator`}>
                    <a className="flex space-x-1 items-center bg-yellow-400 text-black hover:scale-105 transition duration-200 ease-linear px-4 py-1 rounded-full">
                        <p className="">Angebot</p>
                        <BsArrowRightShort className="text-3xl" />
                    </a>
                </Link>
            </nav>

        </div>

    )
}

export default Toolbar
