import Image from "next/image";
import Link from "next/link";
import { HiOutlineSearch, HiShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7eceece] p-4  '>
        <div className='flex items-center justify-center md:w-1/5'>
          <Link href={"/"}>
            <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 '>
              <Image src={""} fill alt='' className='object-contain' />
            </div>
          </Link>
        </div>
        <div>
          <ul className='hidden flex-1 items-center justify-center space-x-8 md:flex '>
            <li className='navHead'>Product</li>
            <li className='navHead'>Explore</li>
            <li className='navHead'>Support</li>
            <li className='navHead'>Business</li>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-4 md:w-1/5">
          <HiOutlineSearch className='h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100 ' />
          <Link href={"/cart"}>
            <div className='relative cursor-pointer'>
              <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center 
              justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 
              text-[10px] text-white
              '>31</span>
              <HiShoppingBag className='h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100' />
            </div>
          </Link>
          {/* Profileee */}
          <FaRegUser className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
        </div>
      </header>
    </>
  );
}

export default Header;
