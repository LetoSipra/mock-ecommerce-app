import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

function AirPodsLanding() {
  return (
    <>
      <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] flex-col items-center text-center  ">
        <div className="space-y-5 m-auto">
          <h1 className="tracking-wide space-y-3 text-5xl font-semibold lg:text-6xl xl:text-7xl ">
            <span className="block bg-gradient-to-r from-black to-black/70 text-8xl bg-clip-text text-transparent p-3">
              AirPods
            </span>
            <span className="block bg-gradient-to-r from-black to-black/80 bg-clip-text text-center text-transparent p-3">
              3rd generation
            </span>
            <span className="text-xl text-gray-500">From $169</span>
          </h1>
          <div className="flex justify-center space-x-5">
            <a className="hover:opacity-85 relative font-normal flex cursor-pointer rounded-3xl border border-solid border-sky-600 bg-sky-500 px-4 py-0.5 text-lg text-white/95 hover:opacity-90">
              Buy
            </a>
            <a className="hover:opacity-85 relative flex cursor-pointer text-lg font-medium text-sky-600 hover:underline">
              Learn More
              <AiOutlineRight className="my-auto ml-1 w-4" />
            </a>
          </div>
        </div>
        <div
          className="absolute -z-50 h-full w-full transition-all duration-500 lg:h-full lg:w-full
         "
        >
          <Image
            src={"pods.webp"}
            fill
            alt="macbook-pro"
            className="object-contain px-1 md:px-0"
          />
        </div>
      </section>
    </>
  );
}

export default AirPodsLanding;
