import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Offer from "../components/Offer"


const About = () => {
  return (
     <div>
        <div >
       <div className="rounded-full bg-amber-400 md:w-[50em] md:h-[50em]  absolute z-4 -mt-[15em] -ml-40"></div>
        <Navbar/>

       <div className="flex justify-center mx-auto ">
         <div className=" relative ">
<div className=" w-[50em] text-center">
<h1 className="font-bold  font-['Judson','serif'] md:text-6xl text-4xl mb-8 mt-16">Qui suis-je </h1>
<p className="xl:w-auto  md:w-5/6 w-2/6 mx-auto">
    Je suis une identité plurielle, une Nantaise originaire des îles de l’Océan Indien, une auteure sensible à la musicalité des mots et fascinée par l’infini des possibles qu’offre l’art du récit. Ma grande passion : passer des heures à écrire et à engloutir des tasses de thé au gingembre. Fin 2020, je publie La magie des rencontres qui sauvent, un premier roman sur l’amitié et la capacité à réinventer sa vie. Un second roman est en gestation.
En 2022, je crée mon blog Choisir d’écrire à destination des auteur.e.s audacieux et audacieuses dans lequel je partage des ressources et conseils sur l’écriture et l’autoédition. La même année, je fais aussi le choix de mettre ma carrière d’Attachée territoriale entre parenthèses pour me consacrer exclusivement à mon activité d’auteure indépendante et lancer mes projets en tant qu’entrepreneure de l’écriture.
Voilà, ça, c’était ma présentation officielle. Mais, vous me faites l’honneur de venir ici, dans ma maison virtuelle. Alors, le moins que je puisse faire, c’est de vous en dire davantage sur moi en espérant faire votre connaissance un jour.
Si je pouvais choisir un superpouvoir, ce serait la téléportation ! Pour réduire le temps et l’espace qui me séparent de ceux que j’aime. Je prendrai une minute tous les matins pour me téléporter à La Réunion, embrasser mes parents et leur souhaiter une belle journée.
La meilleure décision que j’ai prise dans ma vie ? Il y en a deux : choisir comme partenaire de vie un homme ultra-optimiste et devenir maman de deux formidables ninjas !
Mon plus grand regret aujourd’hui, c’est d’avoir rangé ma créativité dans une boîte d’allumettes pendant de longues années...<span className="font-bold italic cursor-pointer hover:text-orange-400"> Lire plus</span> 

          </p>
          </div>

        </div>
        </div>

<div className="mt-20">

    <Offer/>
</div>

    <div className="flex justify-center mx-auto mb-12 ">
         <div className=" relative ">
<div className=" w-[50em] text-center">
<h1 className="font-bold  font-['Judson','serif'] md:text-6xl text-4xl mb-8 mt-16">Comment ? </h1>
<p className="xl:w-auto md:w-5/6 w-2/6 mx-auto">
    Je suis une identité plurielle, une Nantaise originaire des îles de l’Océan Indien, une auteure sensible à la musicalité des mots et fascinée par l’infini des possibles qu’offre l’art du récit. Ma grande passion : passer des heures à écrire et à engloutir des tasses de thé au gingembre. Fin 2020, je publie La magie des rencontres qui sauvent, un premier roman sur l’amitié et la capacité à réinventer sa vie. Un second roman est en gestation.
En 2022, je crée mon blog Choisir d’écrire à destination des auteur.e.s audacieux et audacieuses dans lequel je partage des ressources et conseils sur l’écriture et l’autoédition. La même année, je fais aussi le choix de mettre ma carrière d’Attachée territoriale entre parenthèses pour me consacrer exclusivement à mon activité d’auteure indépendante et lancer mes projets en tant qu’entrepreneure de l’écriture.
Voilà, ça, c’était ma présentation officielle. Mais, vous me faites l’honneur de venir ici, dans ma maison virtuelle. Alors, le moins que je puisse faire, c’est de vous en dire davantage sur moi en espérant faire votre connaissance un jour.
Si je pouvais choisir un superpouvoir, ce serait la téléportation ! Pour réduire le temps et l’espace qui me séparent de ceux que j’aime. Je prendrai une minute tous les matins pour me téléporter à La Réunion, embrasser mes parents et leur souhaiter une belle journée.
La meilleure décision que j’ai prise dans ma vie ? Il y en a deux : choisir comme partenaire de vie un homme ultra-optimiste et devenir maman de deux formidables ninjas !
Mon plus grand regret aujourd’hui, c’est d’avoir rangé ma créativité dans une boîte d’allumettes pendant de longues années...<span className="font-bold italic cursor-pointer hover:text-orange-400"> Lire plus</span> 

          </p>
          </div>

        </div>
        </div>
         </div>
       
         <Footer/>
     </div>
  )
}

export default About