import SectionHome from "../components/SectionHome"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Offer from '../components/Offer'
import SlidingInterval from "../components/SlidingInterval"


const Acceuil = () => {
 


  return (
     <div>
    {/* yellow circle  */}
      <div className="rounded-full xl:bg-amber-400  xl:w-[50em] h-[50em] absolute z-4 -mt-[15em] -ml-40 " ></div>
      <Navbar/>

      {/* Caroussel */}
    <SlidingInterval/>
     {/* Monster's claw left */}
    <img src="img/griffes.webp" alt="Monster's claw left" className='absolute xl:mt-[66rem] md:w-36 xl:w-52 md:mt-[28rem] mt-12 w-20 2xl:w-44' />
{/* Monster's claw right */}
    <img src="img/griffe2.webp" alt="Monster's claw rigth" className='absolute xl:mt-[48rem] mt-[43rem] md:w-36 xl:w-52 w-20 2xl:w-44 flex right-0'/>
    
    <div className="flex items-center justify-center  mx-auto">
    <div className=" relative ">
    
    <div className="container mx-auto justify-center ">
    <SectionHome/>
    </div>
    </div>
    
   </div>
 <div className="xl:my-24 my-12">
      <Offer/>
    </div>
    <Footer/>
 
     </div>
  )
}

export default Acceuil