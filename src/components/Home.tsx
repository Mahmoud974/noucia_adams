import React from "react";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col container mx-auto ">
        <section className="flex justify-between items-center mx-10  ">
          <div className="space-y-4">
            <h1 className="font-bold tracking-wider text-5xl leading-tight">
              CHOISIR D’ÉCRIRE
              <br /> DEVENIR AUTEUR.E
              <br /> INDÉPENDANT.E &<br /> S’ÉPANOUIR
            </h1>
            <p className="w-[40rem] text-md">
              {`Moi, c'est Noucia Adams, et ce qui m'anime profondément dans la
              vie, ce sont les mots. Les mots, ces petites graines sémantiques
              qui prennent racine dans ...`}
            </p>
            <div className="space-x-2">
              <Button variant="yellow" className="text-md">
                Contacter moi
              </Button>
              <Button className="text-md">Contacter moi</Button>
            </div>
          </div>
          <div className="relative  max-w-[36rem]">
            <Image
              src="/img/book.png"
              alt="image de livre Noucia Adams"
              className="w-full justify-center object-contain pt-16"
              width={800}
              height={800}
            />
          </div>
        </section>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mt-52 "
      >
        <path fill="#FBBF24" d="M1440,64L0,96L0,320L1440,320Z"></path>
      </svg>
      <VelocityScroll
        text="TRUSTED BY THE BEST - TRUSTED BY THE BEST - TRUSTED BY THE BEST "
        default_velocity={1}
        className="bg-black py-6  text-white font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </>
  );
}
