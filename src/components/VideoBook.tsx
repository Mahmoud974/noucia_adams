import React from "react";
import { FaAmazon } from "react-icons/fa";
import { SiCultura, SiFnac, SiRakuten } from "react-icons/si";

export default function VideoBook() {
  return (
    <section className="bg-black text-white  py-24 flex items-center justify-center gap-20  `">
      <iframe
        width="660"
        height="415"
        src="https://www.youtube.com/embed/iK_UIkswhAs?si=DRMMos0SiYh5ouSt"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl"
      ></iframe>
      <div className=" ">
        <h1 className="text-4xl">
          {` CHOISIR D'ÉCRIRE DEVENIR`}
          <br />
          AUTEUR.E
        </h1>
        <p className="text-lg">
          {` Moi, c'est ******, et ce qui m'anime`}
          <br /> profondément dans la vie, ce sont les mots.
          <br /> Les mots, ces petites graines sémantiques
          <br /> qui prennent racine dans
        </p>
        <ul className="text-6xl flex space-x-3 mt-4">
          <li>
            <FaAmazon />
          </li>
          <li>
            <SiFnac />
          </li>
          <li>
            <SiRakuten />
          </li>
          <li>
            <SiCultura />
          </li>
        </ul>
      </div>
    </section>
  );
}
