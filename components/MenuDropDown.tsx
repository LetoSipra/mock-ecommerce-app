import { Menu } from "@headlessui/react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";

function MenuDropDown() {
  const links = [
    { href: "/mac", label: "Mac" },
    { href: "/iPad", label: "iPad" },
    { href: "/", label: "iPhone" },
    { href: "/watch", label: "Watch" },
    { href: "/airpods", label: "AirPods" },
    { href: "/tv-home", label: "Tv & Home" },
  ];

  return (
    <Menu>
      <Menu.Button className={`pl-1 md:hidden`}>
        <HiOutlineMenu className="h-10 w-5 mr-4 object-contain opacity-75 hover:opacity-100" />
      </Menu.Button>
      <Menu.Items
        className={
          "absolute top-20 left-2 rounded-none border border-[gray] bg-[#fafafa] text-black"
        }>
        {links.map((link) => (
          <Link href={link.href}>
            <Menu.Item
              as="p"
              key={link.href}
              className=" block w-52 cursor-pointer py-3.5 text-center text-sm font-light text-black transition duration-200 border-b hover:bg-[#caabab]">
              {link.label}
            </Menu.Item>
          </Link>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default MenuDropDown;
