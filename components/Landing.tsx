import Image from "next/image";

function Landing() {
  return (
    <>
      <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 '>
        <div className='space-y-8'>
          <h1 className='tracking- space-y-3 text-5xl font-semibold lg:text-6xl xl:text-7xl '>
            <span className='block bg-gradient-to-r from-pink-500 to-slate-600 bg-clip-text text-transparent'>
              HEADDD
            </span>
            <span className='block'>HEADDD</span>
            <span className='block'>HEADDD</span>
          </h1>
          <div className="space-x-8">
            <button className="">Buy Now!</button>
            <a
              href=''
              className='relative cursor-pointer text-lg font-medium hover:underline'>
              Learn More
            </a>
          </div>
        </div>
        <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px] 
         ">
          <Image src={""} alt='' fill className='object-contain' />
        </div>
      </section>
    </>
  );
}

export default Landing;
