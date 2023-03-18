import { urlFor } from "@/sanity";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import { toast } from "react-hot-toast";

interface Props {
  items: Product[];
  id: string;
}

function CartProductList({ id, items }: Props) {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));

    toast.error(`${items[0].title} removed from cart`, {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center ">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          fill
          alt="product item"
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96 ">{items[0].title}</h4>
            <p className="gapx-1 flex items-end font-semibold">
              {items.length}
              <HiChevronDown className="h-6 w-6 text-blue-500 " />
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Details
            <HiChevronDown className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={items.reduce((total, item) => total + item.price, 0)}
              currency="USD"
            />
          </h4>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => removeItemFromCart()}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductList;
