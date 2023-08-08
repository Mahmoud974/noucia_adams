import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const MyBooks = () => {
 

  return (
    <div >
      {/* yellow circle  */}
      <div className="rounded-full md:bg-amber-400 md:w-[50em] h-[50em] absolute z-4 -mt-[15em] -ml-40 " ></div>
        <Navbar/>
           {/* Monster's claw left */}
     <img src="src/assets/griffes.png" alt="Monster's claw left" className='absolute md:mt-28 mt-3 w-20 md:w-44'/>
     {/* Monster's claw right */}
    <img src="src/assets/griffe2.png" alt="Monster's claw rigth" className='absolute md:mt-[38rem] mt-[63rem] w-20 md:w-44 flex right-0'/>
       <div className="flex justify-center mx-auto">
         <div className=" relative ">
        
       
        <div className="flex flex-col md:flex-row  md:my-24 my-12 " >
          <div>
          <img src="src/assets/book_tablet.png" alt="Noucia Adam's book" className="md:w-[28rem] md:h-[28.5rem] w-[14rem] mx-auto md:mx-none "   />
          </div>
           <div className="md:ml-12 md:mt-0 mt-8  text-center">
             <h1 className="font-bold text-3xl font-['Judson','serif']">La magie des rencontres<br/>
            qui sauvent</h1>
            <p className=" md:w-[36em] mx-auto px-4 md:px-0 w-72 mt-4">« Il arrive parfois que la vie soit aussi incroyable que la fiction. »
Nantes, 13 septembre 2019.
Trois femmes se rencontrent lors d’une fusillade.
Tamaya, perfectionniste et très attachée à ses racines comoriennes, a un projet de vie idéal. Mais tout vole en éclats lors de son mariage au pays.
Rozenn est une danseuse pétillante au caractère excessif. Hantée par son passé, elle se réfugie dans une relation exclusive avec sa sœur et refuse de s’attacher aux autres.
Jade, Réunionnaise au charme fou et mère célibataire, quitte son île pour fuir Dominique et refaire sa vie, mais peine à avancer.
Trois parcours. Une amitié exceptionnelle. La vie s’accélère, entre révélations et rebondissements, elles se réinventent. Mais le destin semble suivre un plan qui les conduira bien plus loin qu’elles ne pourraient l’imaginer.</p>
        <button className=" text-white rounded-full px-6 py-2 mt-4 font-bold bg-black">Commandez</button>
      </div>
      </div>
    
<iframe className="mx-auto md:w-[762px] md:h-[515px] w-[262px] h-[515px]"  src="https://www.youtube.com/embed/iK_UIkswhAs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" ></iframe>

</div>
      </div>
      <h2 className="font-bold text-3xl font-['Judson','serif'] text-center mt-12">On en parle sur le Net</h2>
<div className="container mx-auto space-y-12 mb-8">
   <div className="flex justify-center mt-6">
 <div className="w-2  bg-amber-400 md:flex hidden"></div>
    <div className="md:ml-4 mx-4 flex flex-col ">
      <p className="md:w-[36em] md:text-left text-center">« La magie des rencontres qui sauvent » aborde avec délicatesse et sensibilité des thèmes profonds autour de la famille et de la communauté, des traditions et des cultures, de son rapport à soi et aux autres (et aux hommes). C’est une histoire d’ici et d’ailleurs, une histoire de femmes qui se (re)découvrent, de turbulences et d’émancipation.»<br/>
      <small>Léa, @monpetitbookan</small></p>
    </div>
<img src="src/assets/start.png" alt="" className='absolute ml-[80rem] -mt-[69rem] md:flex hidden'/>
   </div>

    <div className="flex justify-center md:mb-0 ">
 <div className="w-2  bg-amber-400 md:flex hidden "></div>
    <div className="md:ml-4 mx-4 flex flex-col">
        <p className="md:w-[36em] md:text-left text-center">« Noucia est une magicienne. Penchée au-dessus de son chaudron, elle mélange : trois femmes singulières, une bonne rasade d’exotisme, une branche tressée d’amitié, deux ou trois pincées d’actions bien corsées, un soupçon de magie. Puis elle laisse concocter dans une infusion de bienveillance. Le tout pour obtenir un moment merveilleux de lecture. »<br/>
        <small>Apollonie Sbragia, auteure @apollonie.sbragia</small></p>
    </div>
   
   </div>
   
</div>
    <Footer/>
    </div>
  )
}

export default MyBooks