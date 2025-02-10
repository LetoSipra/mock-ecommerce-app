import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

function WatchLanding() {
  return (
    <>
      <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] flex-col items-center text-center  ">
        <div className="my-5 space-y-5">
          <h1 className="space-y-2 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl ">
            <span className="flex justify-center bg-gradient-to-r from-black to-black/80 bg-clip-text pr-[12px] text-transparent">
              <FaApple className="h-12 w-12 lg:w-16 lg:h-16 xl:h-20 xl:w-20 lg:pb-1  text-black" />
              WATCH
              <span className="relative text-lg text-orange-500/90">ULTRA</span>
            </span>
            <span className="block bg-gradient-to-r from-slate-700 to-black bg-clip-text text-center text-3xl text-transparent">
              Adventure awaits.
            </span>
            <span className="text-xl text-black/75">$799</span>
          </h1>
          <div className="flex justify-center space-x-5">
            <a className="hover:opacity-85 relative flex cursor-pointer rounded-3xl border border-solid border-sky-600 bg-sky-500 px-4 py-0.5 text-lg font-normal text-white/95 hover:opacity-90">
              Buy
            </a>
            <a className="hover:opacity-85 relative flex cursor-pointer text-lg font-medium text-sky-600 hover:underline">
              Learn More
              <AiOutlineRight className="my-auto ml-1 w-4" />
            </a>
          </div>
        </div>
        <div
          className="relative -z-50 h-full w-full transition-all duration-500 lg:h-full lg:w-full
         "
        >
          <Image
            src={"watch.jpg"}
            fill
            alt="macbook-pro"
            className="object-contain px-1 md:px-0"
          />
        </div>
      </section>
    </>
  );
}

export default WatchLanding;
