import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

function IpadLanding() {
  return (
    <>
      <section className="sticky top-0 mx-auto md:flex  h-screen max-w-[1350px] items-center justify-between px-8 ">
        <div className="space-y-8 text-center">
          <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="text-lg text-orange-500/90">New</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-slate-300 bg-clip-text text-transparent">
              iPad
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl xl:5xl bg-gradient-to-r from-slate-300 to-yellow-500 bg-clip-text text-transparent">
              Lovable. Drawable.
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl xl:5xl bg-gradient-to-r from-yellow-500 to-slate-300 bg-clip-text text-transparent p-2">
              Magical.
            </span>
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
          className="relative my-10 md:my-0 mx-auto h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px] 
         "
        >
          <Image src={"ipad.jpg"} alt="" fill className="object-contain" />
        </div>
      </section>
    </>
  );
}

export default IpadLanding;
