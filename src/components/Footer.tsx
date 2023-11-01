import { MdFacebook } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white xl:mt-12  mx-auto xl:py-24 py-12 px-12 xl:px-0">
        <ul className="flex xl:flex-row flex-col text-center mx-auto justify-evenly space-y-2">
<li className="flex flex-col ">
    <p className="font-bold"></p>
<form action="" className='mx-auto'>
  <label htmlFor="newsletter" className="flex font-bold">Inscrit toi au newsletter<br/>
dès maintenant, pour retrouver toutes<br/>
mes nouveautés</label>
  <input type="search" name="newsletter" id="newsletter" className="bg-white text-black border-2 rounded-lg my-2"/>
<button className="w-24 rounded-full px-2 mt-2">Validez</button>
</form>
</li>
<li>
 
    <ul className="text-center space-y-2">
        <li className='font-bold'>MENU</li>
        <li>
            
          <Link to='/' className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-slate-50 xl:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
            
          <Link to='/my-books' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-slate-50 xl:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Mon livre</Link>
        </li>
        <li>
          <Link to='/tickets' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-slate-50 xl:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Billets créatifs</Link>
        </li>
        <li>
          <Link to='/about'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-slate-50 xl:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">A propos</Link>
        </li>

        <li>
          <Link to='/newsletter'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-slate-50 xl:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Newsletter</Link>
        </li>
    </ul>
</li>
            <li>
                <div>
                    <p className="font-bold">Rejoignez-moi sur<br/>
                    mes réseaux sociaux</p>
                    <ul className='flex text-4xl space-x-2 text-amber-400 my-4 justify-center'>
                        <li><NavLink to="https://www.facebook.com/Nouciaadams.Auteure/" ><MdFacebook/></NavLink></li>
                        <li><NavLink to="https://www.instagram.com/choisirdecrire_by_noucia" role='link'>
                            <GrInstagram/>
                            </NavLink></li>
                    </ul>

                    <p>© 2023 Copyright Noucia Adams</p>
                    <p>
                        <a href="/mentionlegales"  role='link'>Mentions légales - </a>
                        <a href="/cgv" role='link' > CGV</a>
                    </p>
                    <p>
                        Designed by Mahmoud Moussa 
                    </p>

                </div>
            </li>
        </ul>
    </div>
  )
}

export default Footer