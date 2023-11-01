import AOS from 'aos';
import { useEffect } from 'react';

const Newsletter = () => {
useEffect(()=>{
  AOS.init()
},[])

return (
    <div className=" flex mx-auto  items-center xl:mt-12 mt-6   ">
      <div className="flex xl:flex-row flex-col ">


          <div className=" " data-aos='fade-right'>
              <div className="  ">
                <img src="img/tea.webp" alt="" className="xl:w-[23rem] md:w-[20rem] w-48 xl:-ml-12 mx-auto saturate-50" />
              </div>
            </div>
        <div>
            <div className="xl:w-[32em] w-62 xl:text-left text-center xl:-mr-12 xl:mt-0 mt-6 md:px-0 px-3" data-aos='fade-left'>
                <h4 className="font-bold text-4xl font-['Judson','serif']">Ce que je propose sur ce site?</h4>
                <p className="mt-2 mb-2 xl:px-0 md:px-8">Mes billets créatifs vous embarquent dans mon univers, composé de poèmes et de textes courts sur les sujets qui me touchent. C’est mon laboratoire d’écriture poétique, mon canal d’expression libre, mes moments de respiration créatifs en dehors d’un projet de roman et du cadre contraignant des réseaux sociaux. La présentation de mes livres avec une panoplie d’informations : liens pour passer commande, les avis de lecture, du contenu pour mieux appréhender l’atmosphère...<span className="font-bold">Lire plus</span></p>
            <div className="bg-amber-400 xl:p-4 p-2  text-black xl:mt-0 mt-8 xl:rounded-br-2xl  xl:shadow-inner ">
                <p>Une newsletter le dernier dimanche de chaque mois:</p>
                
                <ul className="xl:list-disc list-none xl:ml-12  text-black font-bold">
                    <li className="text-black font-bold">Mes actualités (salons, évènements…)</li>
                    <li>Des nouvelles de mes projets créatifs</li>
                    <li>Mon cheminement en tant qu’artiste auteure indépendante</li>
                    <li>Les réponses à toutes vos questions</li>
                    <li>Et autres réjouissances … (sondages, concours…)</li>
                    <li>Pour créer un lien authentique entre vous et moi !</li>
                </ul>

            </div>
            </div>
        </div>
          </div>
    </div>
  )
}

export default Newsletter