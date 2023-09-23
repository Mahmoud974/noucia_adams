
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Offer from '../components/Offer';



const Tickets = () => {
 return (
     <div>
        <div>
        <div className="rounded-full bg-amber-400 md:w-[50em] md:h-[50em]  absolute z-4 -mt-[15em] -ml-40"></div>
        <Navbar/>

       <div className="flex justify-center flex-col relative text-center mx-auto md:mt-16 mt-4">
         <div className=" relative ">
  <h1 className="font-bold  font-['Judson','serif'] md:text-6xl text-4xl">Billets créatifs</h1>
    </div>

{/* Card */}
<div className="container  md:mx-auto md:mt-12 mt-8 grid md:grid-cols-3 place-content-center gap-4">
<Card/>

</div>
   </div>
    </div>

    {/* Code promotion for the boo, in the yellow banner */}
    <div className="mt-36 relative">
   <div className="md:-mt-12 -mt-24 ">
     <Offer/>
   </div>
    </div>
      {/* Suscribe in the newsletter */}
      <div className="container flex md:mt-16 mt-4 mx-auto md:mb-0 mb-12">
        <Newsletter/>
      </div>
    <Footer/>
     </div>
  )
}

export default Tickets