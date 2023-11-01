import Newsletter from "./Newsletter"
import AOS from 'aos';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const SectionHome = () => {
  
   const [open,setOpen] = useState<boolean>(false)
useEffect(()=>{
  AOS.init()
}, [])

  const ReadMore = () =>{
setOpen(!open)
  }
  
  return (
   <div className="flex flex-col justify-center mx-auto">
   {
    open ?  <div className="flex flex-col-reverse mx-auto text-center container items-center mt-12" >
      <div className=" flex flex-col justify-center xl:w-2/2 xl:mt-8 mt-8 w-72 md:w-[30rem] text-center mx-auto items-center " data-aos='fade-right'>
      <h1 className="font-bold text-4xl font-['Judson','serif'] ">
        Choisir d’écrire – <br/>
      Devenir auteur.e indépendant.e 
      & s’épanouir</h1>
      <p className="mt-4 xl:w-[76em] md:w-[26em] text-center ">Moi, c'est Noucia Adams, et ce qui m'anime profondément dans la vie, ce sont les mots. Les mots, ces petites graines 
      sémantiques qui prennent racine dans mon esprit, reflètent ma sensibilité et mon âme tout en étant chargés de couleurs, 
     de vie et d'espoir.
      Depuis mon plus jeune âge, j'ai été captivée par le pouvoir des mots. Ils m'enveloppent comme une toile d'araignée, tissant des liens subtils entre les idées, 
      les émotions et les êtres. La poésie est devenue mon refuge, un espace où je peux explorer mes sentiments les plus profonds et donner vie à mes rêves les plus fous.
      Les mots sont ma palette, et j'aime mélanger les teintes pour créer des tableaux d'émotions. Je jongle avec les adjectifs pour peindre des paysages enchanteresses, avec les verbes pour donner vie à des histoires captivantes, et avec les adverbes pour insuffler une dose de magie à chaque phrase.
      Mais ce qui me passionne le plus, c'est leur pouvoir de connexion. Les mots sont des passerelles entre les cœurs et les esprits, ils transcendent les barrières de la langue et de la culture pour toucher l'âme de l'autre. J'aime écrire pour communiquer, pour partager mes pensées et mes expériences avec le monde, dans l'espoir d'inspirer, d'émouvoir, et de créer des liens authentiques.
      Chaque jour, je m'évade dans l'univers infini des mots, cherchant des perles rares dans les dictionnaires et les livres, explorant les horizons de l'écriture créative. C'est un voyage sans fin, une quête insatiable de beauté littéraire.
      Quand les mots dansent sur la page, c'est comme si le temps s'arrêtait, et je me perds dans leur rythme envoûtant. Je suis une rêveuse, une amour</p>
     
     <button className="bg-black text-amber-300 w-24 rounded-full px-2 py-2 xl:mt-2 font-bold hover:bg-amber-300 hover:text-black mx-auto md:mx-0  mt-6">Ready !</button>
     
      </div>
      <div data-aos='fade-left'>
        <img src="img/profil_adams_noucia.webp" alt="profil auteur noucia adams" className="xl:w-72 w-40 mx-auto xl:mx-0 "/>
      </div>
    </div> : 
    
    <div className="xl:mt-24 xl:justify-between mt-10 flex xl:flex-row flex-col-reverse justify-items-center xl:space-x-20 mx-auto md:flex-row md:items-center " >
      <div className=" flex flex-col justify-center xl:w-1/2 xl:mt-0 mt-8 w-72 md:w-[30rem] md:text-left text-center xl:text-left" data-aos='fade-right'>
      <h1 className="font-bold text-4xl font-['Judson','serif'] ">
        Choisir d’écrire – <br/>
      Devenir auteur.e indépendant.e 
      & s’épanouir</h1>
      <p className="mt-4 xl:w-[36em] md:w-[26em]">Moi, c'est Noucia Adams, et ce qui m'anime profondément dans la vie, ce sont les mots. Les mots, ces petites graines 
      sémantiques qui prennent racine dans mon esprit, reflètent ma sensibilité et mon âme tout en étant chargés de couleurs, <span className="font-bold italic cursor-pointer hover:text-orange-400" onClick={() => ReadMore()}> Lire plus</span></p>
      {
        open && <p>de vie et d'espoir.
      Depuis mon plus jeune âge, j'ai été captivée par le pouvoir des mots. Ils m'enveloppent comme une toile d'araignée, tissant des liens subtils entre les idées, 
      les émotions et les êtres. La poésie est devenue mon refuge, un espace où je peux explorer mes sentiments les plus profonds et donner vie à mes rêves les plus fous.
      Les mots sont ma palette, et j'aime mélanger les teintes pour créer des tableaux d'émotions. Je jongle avec les adjectifs pour peindre des paysages enchanteresses, avec les verbes pour donner vie à des histoires captivantes, et avec les adverbes pour insuffler une dose de magie à chaque phrase.
      Mais ce qui me passionne le plus, c'est leur pouvoir de connexion. Les mots sont des passerelles entre les cœurs et les esprits, ils transcendent les barrières de la langue et de la culture pour toucher l'âme de l'autre. J'aime écrire pour communiquer, pour partager mes pensées et mes expériences avec le monde, dans l'espoir d'inspirer, d'émouvoir, et de créer des liens authentiques.
      Chaque jour, je m'évade dans l'univers infini des mots, cherchant des perles rares dans les dictionnaires et les livres, explorant les horizons de l'écriture créative. C'est un voyage sans fin, une quête insatiable de beauté littéraire.
      Quand les mots dansent sur la page, c'est comme si le temps s'arrêtait, et je me perds dans leur rythme envoûtant. Je suis une rêveuse, une amour</p>
      }
     <button className="bg-black text-amber-300 w-24 rounded-full px-2 py-2 xl:mt-2 font-bold hover:bg-amber-300 hover:text-black mx-auto md:mx-0  mt-6">Ready !</button>
     
      </div>
      <div data-aos='fade-left'>
        <img src="img/profil_adams_noucia.webp" alt="profil auteur noucia adams" className="xl:w-72 w-40 mx-auto xl:mx-0 "/>
      </div>
    </div>
   }

    <div className="my-12 mx-6 " data-aos='fade-up'>
      <ul className="font-['Judson','serif'] flex md:flex-wrap items-center xl:flex-row flex-col xl:space-y-0 space-y-7 xl:justify-between  mt-6 mx-auto ">
      <li className="text-center">
        <img src="img/icon1.svg" alt="" className="mx-auto"/>
        <h2 className="text-6xl"> +
        <CountUp end={2000} duration={2}/>

       
        </h2>
        <h3 className="text-2xl">Confidence</h3>
      </li>
      <li className="text-center">
        <img src="img/icon3.svg" alt="" className="w-[9rem] mx-auto"/>
        <h2 className="text-6xl"> +<CountUp end={75} duration={2}/>k</h2>
        <h3 className="text-2xl">Abonné sur insta</h3>
      </li>
      <li className="text-center">
        <img src="img/icon2.svg " alt="" className=" mx-auto"/>
        <h2 className="text-6xl"> +<CountUp end={885} duration={2}/> M</h2>
        <h3 className="text-2xl">Téléchargement</h3>
      </li>
      <li className="text-center">
        <img src="img/icon4.svg" alt="" className="w-[9.6rem] mx-auto" />
        <h2 className="text-6xl"> +<CountUp end={700} duration={2}/></h2>
        <h3 className="text-2xl">Entrepreuneur formés</h3>
      </li>

    </ul>
    </div>
    {/* Suscribe in the Newsletter */}
    <Newsletter/>

  
   </div>
  )
}

export default SectionHome