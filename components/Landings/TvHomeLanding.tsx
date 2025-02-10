import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

function TvHomeLanding() {
  return (
    <>
      <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] flex-col items-center text-center  ">
        <div
          className="relative -z-50 h-full w-full transition-all duration-500 lg:h-full lg:w-full
         "
        >
          <Image
            src={"tv.jpg"}
            fill
            alt="macbook-pro"
            className="object-contain px-1 md:px-0"
          />
        </div>
      </section>
    </>
  );
}

export default TvHomeLanding;
