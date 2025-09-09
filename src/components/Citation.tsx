import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Citation() {
  return (
    <section className="flex items-center justify-between text-center">
      <div className="flex-1 p-4 space-y-3">
        <h1 className="text-5xl">
          {`CHOISIR D'ÉCRIRE`}
          <br />
          DEVENIR AUTEUR.E
        </h1>
        <p className="w-1/2 text-1xl text-center mx-auto">
          {`Moi, c'est Noucia Adams, et ce qui m'anime profondément dans la vie,
            ce sont les mots. Les mots, ces petites graines sémantiques qui
            prennent...`}
        </p>
        <Button variant="yellow" className="text-md">
          Acheter
        </Button>
      </div>

      <div className="bg-yellow-500 h-auto py-24 w-26 flex-1 flex justify-center">
        <Image
          src="/img/booktablet.png"
          alt="image de livre Noucia Adams"
          className="w-2/4    "
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
