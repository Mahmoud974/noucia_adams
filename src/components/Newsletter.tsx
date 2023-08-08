


const Newsletter = () => {


 
  return (
    <div className=" flex mx-auto items-center mt-12   ">
      <div className="flex ">

   
          <div className=" ">
              <div className="  ">
                <img src="src/assets/tea.webp" alt="" className="w-[23rem] -ml-12 saturate-50" />
              </div>
            </div>
        <div>
            <div className="w-[32em] -mr-12">
                <h2 className="font-bold text-4xl font-['Judson','serif']">Ce que je propose sur ce site?</h2>
                <p className="mt-2">Mes billets créatifs vous embarquent dans mon univers, composé de poèmes et de textes courts sur les sujets qui me touchent. C’est mon laboratoire d’écriture poétique, mon canal d’expression libre, mes moments de respiration créatifs en dehors d’un projet de roman et du cadre contraignant des réseaux sociaux. La présentation de mes livres avec une panoplie d’informations : liens pour passer commande, les avis de lecture, du contenu pour mieux appréhender l’atmosphère, l’environnement, les thèmes abordés...Lire plus</p>
            <div className="bg-amber-400 p-4 text-white mt-8 rounded-br-2xl  shadow-inner">
                <p>Une newsletter le dernier dimanche de chaque mois:</p>
                
                <ul className="list-disc ml-12">
                    <li>Mes actualités (salons, évènements…)</li>
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