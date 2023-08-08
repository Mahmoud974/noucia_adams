import { MdFacebook } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white mt-12 mx-auto py-24">
        <ul className="flex justify-evenly space-y-2">
<li className="flex flex-col ">
    <p className="font-bold">Inscrit toi au newsletter<br/>
dès maintenant, pour retrouver toutes<br/>
mes nouveautés</p>
<form action="">
  <input type="search" name="" id="" className="bg-black border-amber-400 border-2 rounded-lg my-2"/>
<button className="bg-amber-400 w-24 rounded-full px-2 mt-2">Validez</button>
</form>
</li>
<li>
 
    <ul className="text-center space-y-2">
        <li className='font-bold'>MENU</li>
        <li>
            
          <Link to='/' className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-50 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
            
          <Link to='/my-books' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-50 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mon livre</Link>
        </li>
        <li>
          <Link to='/tickets' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-50 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Billets créatifs</Link>
        </li>
        <li>
          <Link to='/about'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-50 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A propos</Link>
        </li>

        <li>
          <Link to='/newsletter'className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-50 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Newsletter</Link>
        </li>
    </ul>
</li>
            <li>
                <div>
                    <p className="font-bold">Rejoignez-moi sur<br/>
                    mes réseaux sociaux</p>
                    <ul className='flex text-4xl space-x-2 text-amber-400 my-4'>
                        <li><a href=""><MdFacebook/></a></li>
                        <li><a href="">
                            <GrInstagram/>
                            </a></li>
                    </ul>

                    <p>© 2023 Copyright Noucia Adams</p>
                    <p>
                        <a href="/mentionlegales">Mentions légales - </a>
                        <a href="cgv"> CGV</a>
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