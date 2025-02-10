import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

function Landing() {
  return (
    <>
      <section className="sticky top-0 mx-auto flex h-screen  max-w-[1350px] flex-col items-center">
        <div className="my-5 space-y-8 ">
          <h1 className="tracking-wide space-y-3 text-5xl font-semibold lg:text-6xl xl:text-7xl ">
            <span className="block bg-gradient-to-r from-pink-500 to-slate-600 bg-clip-text text-transparent">
              iPhone 14 Pro
            </span>
            <span className="block bg-gradient-to-r text-4xl text-center from-slate-500 to-pink-300 bg-clip-text text-transparent">
              Pro. Beyond.
            </span>
          </h1>
          <div className="flex justify-center space-x-10">
            <a className="hover:opacity-85 flex relative cursor-pointer text-lg font-medium text-sky-600 hover:underline">
              Learn More
              <AiOutlineRight className="w-4 ml-1 my-auto" />
            </a>
            <a className="hover:opacity-85 flex relative cursor-pointer text-lg font-medium text-sky-600 hover:underline">
              Buy
              <AiOutlineRight className="w-4 ml-1 my-auto" />
            </a>
          </div>
        </div>
        <div
          className="relative  h-full w-full transition-all duration-500 lg:h-full lg:w-full
         "
        >
          <Image
            src={"iphone.jpg"}
            fill
            alt=""
            className="object-contain px-5"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
