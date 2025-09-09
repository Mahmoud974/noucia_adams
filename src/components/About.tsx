import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <main className="container mx-auto px-4">
      <section className="mx-auto text-center container mt-12">
        <h2 className="relative inline-block text-black after:block after:w-full after:h-1 after:bg-yellow-500 after:absolute after:left-0 after:-bottom-1">
          MANY AMAZING FEATURES
        </h2>

        <h1 className="text-6xl mt-6">Why choose the book</h1>
        <div className=" flex justify-between  mt-16   mx-auto ">
          {[
            {
              img: "",
              title: "Introduction",
              text: "Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur.",
            },
            {
              img: "",
              title: "Vision of book",
              text: "Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur.",
            },
            {
              img: "",
              title: "Peaceful mind",
              text: "Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur.",
            },
            {
              img: "",
              title: "Make successful",
              text: "Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col   items-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full text-white text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-500 text-center px-2">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex  justify-center gap-8 mt-16 max-w-6xl mx-auto ">
        <div className="flex items-center gap-8 justify-center  ">
          <Image
            src="/img/noucia.png"
            alt="image de livre Noucia Adams"
            width={1000}
            height={1000}
            className="w-4/4"
          />
          <div className="bg-[#FBBF24]   w-2/4 p-10 rounded-lg">
            <p className="font-bold text-5xl ">NOUCIA ADAMS</p>
            <p>
              {` Moi, c'est Noucia Adams, et ce qui m'anime profondément vie, ce la
            sont les mots. Les mots, ces petites graines sémantiques qui
            prennent racine dans`}
            </p>
          </div>
          <div>
            <p className="w-1/3">
              {` Moi, c'est Noucia Adams, et ce qui m'anime profondément vie, ce la
            sont les mots. Les mots, ces petites graines sémantiques qui
            prennent racine dans`}
            </p>
            <Button variant={"default"} className="text-yellow-300">
              Create an Account
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
