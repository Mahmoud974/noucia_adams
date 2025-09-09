import Image from "next/image";
import React from "react";

export default function BuyBook() {
  return (
    <div className="my-12 xl:my-24 mx-auto  bg-amber-400 h-auto py-6 flex flex-col items-center mx-auto  xl:flex-row xl:justify-center xl:space-x-14">
      {/* Texte */}
      <div className="text-black text-center xl:text-left mt-2 xl:flex xl:flex-col xl:justify-center">
        <p className="text-lg xl:text-xl font-semibold">NO TIME FOR READING?</p>
        <h2 className="font-bold text-2xl xl:text-7xl font-['Judson',serif] tracking-tighter mt-2">
          Now available <br />
          on Spotify & App store.
        </h2>
        <p className="text-lg mt-4 max-w-lg">
          {`Lorem ipsum simply dummy text printing and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since
            an unknown printer took a galley of type and scrambled.`}
        </p>
        <div className="space-x-4 my-3">
          <button className="bg-white text-black py-3 px-6 rounded-lg shadow hover:bg-gray-800">
            On Spotify
          </button>
          <button className="bg-white text-black py-3 px-6 rounded-lg shadow hover:bg-gray-800">
            On App store
          </button>
        </div>
      </div>

      {/* Image */}
      <div>
        <Image
          src="/img/booktablet.png"
          alt="image de livre Noucia Adams"
          width={1000}
          height={1000}
          className="w-2/3   hidden xl:block"
        />
      </div>
    </div>
  );
}
