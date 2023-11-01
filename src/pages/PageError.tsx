import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {motion} from "framer-motion"


const PageError = () => {
  return (
     <div>
       <img src="img/griffes.png" alt="" className='absolute mt-28 '/>
        
        <Navbar/>
<motion.img src="img/error_img.webp" alt=" page error" className="w-1/2 mx-auto"       
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}/>
      <a href="/" className="text-3xl flex justify-center text-center mt-6 underline underline-offset-2 text-amber-300 curs"
>
        <img src="img/start.webp" alt="" className='absolute ml-[80rem] -mt-28 w-20'/> 
     
        Retourner à l'acceuil</a>
      
         <Footer/>
     </div>
  )
}

export default PageError