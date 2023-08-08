
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Offer from '../components/Offer';



const Tickets = () => {
 
  
  return (
     <div>
        <div >
        <div className="rounded-full bg-amber-400 w-[50em] h-[50em] absolute z-4 -mt-[15em] -ml-40"></div>
        <Navbar/>

       <div className="flex justify-center flex-col relative text-center mx-auto mt-16">
         <div className=" relative ">
  <h1 className="font-bold  font-['Judson','serif'] text-6xl">Billets créatifs</h1>
    </div>

{/* Card */}
<div className="container mx-auto mt-12 grid grid-cols-3 gap-4">
<Card/>



</div>


    </div>
    </div>

    {/* Hauteur newsletter */}
    <div className="mt-36 relative">
   <div className="">
     <Offer/>
   </div>
    </div>
       <div className="container flex mt-16 mx-auto">
         <Newsletter/>
       </div>
    <Footer/>
     </div>
  )
}

export default Tickets