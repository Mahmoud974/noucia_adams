import { useState } from "react";
import { Link} from "react-router-dom";



const Navbar = () => {
   const [navBarColor, setNavBarColor] = useState<string >('border-gray-200 relative md:bg-none bg-amber-400 ')


    window.addEventListener('scroll',():void =>
    window.scrollY > 0 ? setNavBarColor('shadow shadow-xl z-50 bg-amber-400  border-gray-200 sticky top-0 ') : setNavBarColor('border-gray-200 relative')
    )
    
  
  return (
  <nav className={navBarColor} 
  >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <img src="src/assets/logo_noucia_adams_auteure.webp" alt="photo of Noucia Adams" className="md:w-44 w-24 flex mx-auto " />
       
    </a>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"    d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      
        <li>
           
          
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor"  d="m1 1 4 4 4-4"/>
  </svg></button>
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                           <Link to='/'>
                HOME
             </Link>
                          </li>
                          <li>

                    <Link to='/my-books'>
                    MES LIVRES
                    </Link>
                </li>
                <li>
                    <Link to='/tickets'>
                        BILLETS CRÉATIFS
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        A PROPOS
                    </Link>
                </li>
                <li>
                <Link to='/newsletter'>
                NEWSLETTER
                </Link></li>
                        </ul>
                    </div>
                  </li>
                 
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
         <li>
            
          <Link to='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
            
          <Link to='/my-books' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mon livre</Link>
        </li>
        <li>
          <Link to='/tickets' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Billets créatifs</Link>
        </li>
        <li>
          <Link to='/about'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A propos</Link>
        </li>

        <li>
          <Link to='/newsletter'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Newsletter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;