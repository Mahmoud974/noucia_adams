"use client";
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    title: "My library is an archive of longings.",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    title: "My library is an archive of longings.",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    title: "My library is an archive of longings.",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    title: "My library is an archive of longings.",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  title,
  body,
}: {
  img: string;
  name: string;
  username: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative   w-full cursor-pointer overflow-hidden rounded-xl   mt-12",
        "bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300",
        "dark:bg-gray-800 dark:shadow-gray-700 dark:hover:shadow-2xl"
      )}
    >
      <div className="flex w-96 flex-col items-center gap-4">
        <div className="px-6">
          <p className=" text-left font-bold mb-2">{title}</p>
          <blockquote className="text-left   text-base">{body}</blockquote>
        </div>

        <hr className="my-0 -t-2 -gray-300 dark:-gray-700 w-full" />

        <div className="flex px-3 pb-3 items-center justify-between w-full  ">
          {/* Profil collé à gauche */}
          <div className="flex   items-center gap-4 ">
            <Image
              className="rounded-full"
              width={64}
              height={64}
              alt={`${name}'s profile picture`}
              src={img}
            />
            <div>
              <figcaption className="text-lg font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-sm font-medium dark:text-white/60">
                {username}
              </p>
            </div>
          </div>

          {/* Note collée à droite */}
          <div className="text-sm dark:text-white/60 bg-yellow-400 rounded-2xl font-bold px-3 py-1 flex items-center">
            <IoMdStar />
            <p className="ml-1 text-md">4.5</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function Comments() {
  return (
    <>
      <h1 className="tracking-wider text-5xl leading-tight mt-12">
        Real voices, real experiences
      </h1>
      <p>
        Taking a look at how our valuable users enhanced their journey with us.
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
