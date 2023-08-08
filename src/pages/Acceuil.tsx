import SectionHome from "../components/SectionHome"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Offer from '../components/Offer'
import SlidingInterval from "../components/SlidingInterval"






const Acceuil = () => {


  return (
     <div>
    
      <div className="rounded-full bg-amber-400 w-[50em] h-[50em] absolute z-4 -mt-[15em] -ml-40" ></div>
      <Navbar/>
<SlidingInterval/>
 

       {/* <motion.div className="relative h-[70vh] w-screen saturate-50 sepia object-cover bg-black" 
       initial={{opacity: 0}} 
       animate={{opacity: 1}}
       transition={{duration: 0.5}}
       >
     </motion.div> */}

         
      <img src="src/assets/griffes.png" alt="" className='absolute mt-28 '/>

      <div className="flex items-center justify-center  mx-auto">
       {/* <img src="src/assets/start.png" alt="" className='absolute ml-[80rem] -mt-[69rem]'/> */}
     
     
  
      
    <div className=" relative ">
      
     
   <div className="container mx-auto justify-center ">
    
     <SectionHome/>
     
   {/* <a href='/'>
     <IoIosArrowDropupCircle className="text-6xl flex ml-auto text-right my-6 cursor-pointer hover:text-amber-400 "/>
   </a> */}
   </div>
    </div>
    <img src="src/assets/griffe2.png" alt="" className='absolute ml-[84rem] mt-[20rem]'/>
      </div>
 <div className="my-24">
      <Offer/>
    </div>
    <Footer/>
 
     </div>
  )
}

export default Acceuil