import { Link } from "react-router-dom";

export default function Header() {
    return ( 
        <header className="bg-violet-800 p-4 text-white w-full bg-neutral-200 shadow-gray-400 shadow-lg
             text-4 flex justify-center item-center rounded-5 p-4 flex-col ">

              <h1 className=" text-xl flex justify-start font-bold mb-4 md:mb-0 hover:bg-gray">Home</h1>

             <nav className="flex justify-end space-x-6 md:flex-row justify-around bg-light data-bs-theme-light">

                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-800 py-2 rounded-lg ">
                    <li>
                        <Link to='/' className={({ isActive }) => isActive ? 'text-yellow-800' : 'text-white'}>
                            Inicio
                        </Link>
                    </li>
                </ul>

                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-800 py-2 rounded-lg">
                    <li>
                        <Link to='/Discografia' className={({ isActive }) => isActive ?  "bg-blue-500 text-white" : "bg-white text-black"}>
                            Discografia
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-800 py-2 rounded-lg">
                    <li>
                        <Link to='/Contactos' className={({ isActive }) => isActive ? 'text-yellow-300 hover:text-black' : 'text-white '}>
                        Contactos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}