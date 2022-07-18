import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            explicabo dolore distinctio iste cupiditate impedit, rerum pariatur
            temporibus in soluta quas minima fugiat laboriosam quidem nisi
            nostrum dicta? Quis, quo Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident pariatur facilis maiores reprehenderit
            minima optio aliquam repudiandae cupiditate sed nobis, expedita modi
            fuga aut alias minus eos ab asperiores fugiat?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some projects I&apos;ve made
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/fireclint/portfolio-nextjs/main/public/assets/about.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
