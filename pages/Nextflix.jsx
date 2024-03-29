import Image from "next/image";
import React from "react";
import nextflixImage from "../public/assets/projects/nextflix-thumbnail.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Nextflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] lg:w-full bg-black/80 z-10" />
        <Image
          className="absolute"
          layout="fill"
          objectFit="cover"
          src={nextflixImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%]  right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Nextflix</h2>
          <h3>Next JS / Tailwind / Firebase / Typescript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a project built using Nextjs. This is essentaily a Netflix
            clone which takes in movie data from The Movie Database and displays
            different genres of movies. You are able to sign in to the website
            and you can favorite movies see those favorited movies on your
            account page.
          </p>
          <Link href="https://netflix-app-ivory.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Petr1197/netflix-app">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Reactjs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nextjs
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer font-bold">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Nextflix;
