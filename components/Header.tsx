import Image from "next/image";
import Link from "next/link";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaApple, FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/store/cartSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import MenuDropDown from "./MenuDropDown";

function Header() {
  const { data: session } = useSession();
  const totalCart = useSelector(selectCartItems);

  const navHeads = [
    { id: 0, label: "Mac", href: "mac" },
    { id: 1, label: "iPad", href: "iPad" },
    { id: 2, label: "iPhone", href: "/" },
    { id: 3, label: "Watch", href: "watch" },
    { id: 4, label: "AirPods", href: "airpods" },
    { id: 5, label: "TV & Home", href: "tv-home" },
  ];

  return (
    <>
      <header className="top-0 flex h-12 w-full items-center justify-between bg-[#434344] p-2  text-white opacity-95 md:justify-center  ">
        <div className="flex items-center justify-center md:w-1/5">
            <MenuDropDown />
          <Link href={"/"}>
            <div className="relative h-10 w-5 cursor-pointer opacity-70 transition duration-300 hover:opacity-100 ">
              <FaApple className="h-10 w-5 object-contain text-black" />
            </div>
          </Link>
        </div>
        <div>
          <ul className="hidden flex-1 items-center justify-center space-x-8 md:flex ">
            {navHeads.map((items) => (
              <Link href={items.href}>
                <li
                  className="cursor-pointer opacity-75 transition hover:opacity-100"
                  key={items.id}>
                  {items.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-4 md:w-1/5">
          <HiOutlineSearch className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100 " />
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              {totalCart.length > 0 && (
                <span
                  className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center 
              justify-center rounded-full bg-gradient-to-r from-gray-900 to-slate-700/80 
              text-[10px] text-white
              ">
                  {totalCart.length}
                </span>
              )}
              <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
            </div>
          </Link>
          {session ? (
            <Image
              src={session.user?.image || ""}
              alt="profile picture"
              height={34}
              width={34}
              className="cursor-pointer rounded-full"
              onClick={() => signOut()}
            />
          ) : (
            <FaRegUser
              onClick={() => signIn()}
              className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100"
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
