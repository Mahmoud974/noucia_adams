import AOS from 'aos';
import { useEffect } from 'react';


const Offer = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="bg-amber-400 md:h-44 h-24 flex md:flex-row md:justify-center md:space-x-20 flex-col ">
        <div className='' data-aos='fade-left'>
             <img src="src/assets/book_tablet.png" alt="" className="md:w-[18rem] w-44 h-94 -mt-12 md:flex hidden"   />
            
        </div>
        <div className="text-black md:text-left text-center mt-2" data-aos='fade-right'>
            <h2 className="font-bold md:text-8xl text-2xl font-['Judson','serif']  ">Offre de 20%</h2>
            <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur. Sodales <br/>
            aliquet placerat amet tellus dui eros magna.
            </p>
        </div>

    </div>
  )
}

export default Offer