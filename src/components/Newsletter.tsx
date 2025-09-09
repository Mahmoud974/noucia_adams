import Image from "next/image";
import React from "react";

export default function Newsletter() {
  return (
    <section className="flex mx-auto  max-w-7xl flex-col xl:flex-row items-center justify-center my-12 xl:my-24 ">
      {/* Image */}
      <Image
        src="/img/tea.webp"
        alt="image de livre Noucia Adams"
        width={1000}
        height={1000}
        className="w-[600px] h-[600px]  object-contain"
      />

      {/* Contenu texte */}
      <div className="  text-center xl:text-left xl:w-2/4">
        <h1 className="text-2xl xl:text-3xl  mb-4">
          Obtenez gratuitement votre plan d’action pour devenir auteur·e
          indépendant·e en 11 étapes !
        </h1>
        <p className="text-lg mb-8">
          {`En téléchargeant votre ebook, vous recevrez également notre Newsletter “Choisir d’écrire” pour des conseils puissants et booster votre parcours d’auteur·e.`}
        </p>

        {/* Section Newsletter */}
        <div className="bg-yellow-500 text-lg text-left p-6 rounded-br-3xl shadow-md">
          <p className="text-left font-bold text-black mb-4">
            Une newsletter le dernier dimanche de chaque mois :
          </p>
          <ul className="list-disc list-inside space-y-1    ml-5">
            <li>Un guide pratique et facile à suivre</li>
            <li>11 objectifs clairs, transformés en actions concrètes</li>
            <li>{`Mon cheminement en tant qu'artiste auteure indépendante`}</li>
            <li>
              Des conseils pour chaque étape : écriture,
              autoédition/publication, communication
            </li>
          </ul>
          <form action="">
            <ul className="flex  gap-2  mt-3">
              <li>
                <input
                  type="text"
                  placeholder="Nom"
                  className="bg-black py-3 px-2 rounded-sm w-full text-white"
                />
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black py-3 px-2 rounded-sm w-full text-white"
                />
              </li>
              <li>
                <input
                  type="submit"
                  value="RECEVOIR LE EBOOK"
                  className="bg-black text-white py-3 px-4 rounded-sm"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}
