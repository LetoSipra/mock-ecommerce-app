import { urlFor } from "@/sanity";
import Image from "next/image";
import {AiOutlineShoppingCart} from "react-icons/ai"

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const addItemToCart = () => {
    
  }

  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10'>
      <div className='relative h-64 w-full md:h-72'>
        <Image
          src={urlFor(product.image[0]).url()}
          fill
          alt='product image'
          className='object-contain'
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className='space-y-2 text-xl text-white md:text-2xl'>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
        <div className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]" onClick={() => addItemToCart}>
            <AiOutlineShoppingCart className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Product;
