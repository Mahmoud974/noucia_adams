import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Offer from "../components/Offer";


const NewsletterPage = () => {
  return (
   
          <div >
        
        <div className="rounded-full  bg-amber-400 w-[50em] h-[50em] absolute z-4 -mt-[15em] -ml-40"></div>
        <Navbar/>

       <div className="flex justify-center text-center mx-auto mt-16">
         <div className=" relative ">
      
        <div className="" >
           <div className="">
             <h1 className="font-bold text-5xl font-['Judson','serif'] mb-6">Ma Newletter</h1>
             </div>


             <div className="bg-amber-400 drop-shadow-2xl h-[37em] w-[30em] rounded-xl ">
              <form action="">
              <div className="flex flex-col mx-12 space-y-6 pt-12">
                  <input type="text" name="" id="" placeholder=" Jean Dupont"  className="py-4 bg-amber-400 border border-black text-black" />
                <input type="email" name="" id="" placeholder=" Email" className="py-4 bg-amber-400 border border-black text-black"/>
              <input type="submit" value="Je m'inscris avec plaisir !" className="bg-black text-white w-3/4 p-2 mx-auto rounded-md" />
              </div>
                </form>

              <div className="text-white mt-5 px-2">
                <p>
                  Je vous raconte les tribulations de ma vie d'auteure indépendante le dernier dimanche de chaque mois! </p>

            <p>Au programe :</p>
            <ul className="">
              <li>✔Mes actualités (salons, évènements…)</li>
              <li>✔Des nouvelles de mes projets créatifs</li>
              <li>✔Mon cheminement en tant qu’artiste auteure indépendante</li>
              <li>✔Les réponses à toutes vos questions</li>
              <li>✔Et autres réjouissances … (sondages, concours, infos exclusives …)</li>
            </ul>
            <p>☕ 😉 Pour créer un lien authentique entre vous et moi !</p>

            <div className="mt-2">
              <img src="src/assets/logo_noucia_adams_auteure.webp" alt="" className="w-36  flex mx-auto " />
            </div>
             </div>
             </div>

             <div>
              <p></p>
             </div>
             </div>
             </div>
             </div>
             <div className="my-24">
              <Offer/>
             </div>
             <Footer/>
             </div>     
          
  )
}

export default NewsletterPage;