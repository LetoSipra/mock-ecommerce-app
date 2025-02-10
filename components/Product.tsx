import { urlFor } from "@/sanity";
import { addToCart } from "@/store/cartSlice";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#ffffff] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          fill
          alt="product image"
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className=" text-xl text-black md:text-2xl">
          <h1 className="mb-3">{product.title}</h1>
          <p>${product.price}</p>
          <p className="text-xs text-gray-500">{product.description}</p>
        </div>
        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-700/75 transition duration-200 hover:opacity-90 md:h-[70px] md:w-[70px]"
          onClick={() => addItemToCart()}>
          <AiOutlineShoppingCart className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Product;
