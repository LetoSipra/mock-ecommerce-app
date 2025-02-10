import Head from "next/head";
import { useRouter } from "next/router";
import { BsApple, BsCheck2 } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import Currency from "react-currency-formatter";
import { GetServerSideProps } from "next";
import { fetchItems } from "@/utility/fetchItems";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaApple } from "react-icons/fa";
interface Props {
  products: StripeProduct[];
}

function Succsess({ products }: Props) {

  const router = useRouter();
  const { session_id } = router.query;
  const [mount, setMount] = useState(false);
  const [show, setShow] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const showOrder = isTabletOrMobile ? show : true;
  const { data: session } = useSession();
  const subTotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div>
      <Head>
        <title>Thank You! For Purchasing</title>
      </Head>
      <main className="grid grid-cols-1 lg:grid-cols-9">
        <section className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
              <BsApple className="h-10 w-10 text-gray-700/75 transition duration-300 hover:text-gray-800" />
            </div>
          </Link>
          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="item-center flex h-11 w-11 justify-center rounded-full border-2 border-black">
              <BsCheck2 className="m-auto h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg ">Thank You</h4>
              {session ? session.user?.name?.split("")[0] : "Guest"}
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-8 pb-3">
              <p>Your order was succsesful</p>
              <p className="text-sm text-gray-600">
                Description bla bla bla bla
              </p>
            </div>
            <div className="pt-2 font-medium text-gray-600">
              <p>Tracking number: </p>
              <p>QJKRD31PD3VR3213</p>
            </div>
          </div>
          <div className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Order</p>
            <p className="text-sm text-gray-600">Details</p>
          </div>
          <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
            <p className="hidden cursor-pointer lg:inline">
              Need help ? Contact us
            </p>
            <button
              className={`${isTabletOrMobile ? "w-full" : undefined} py-4`}
              onClick={() => router.push("/")}>
              Continue Shopping
            </button>
          </div>
        </section>
        <section className="border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0">
          <div
            className={`w-full ${
              showOrder && "border-b"
            } border-gray-300 text-sm lg:hidden`}>
            <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6 ">
              <button
                onClick={() => setShow(!show)}
                className="flex items-center space-x-2">
                <HiOutlineShoppingCart className="h-6 w-6" />
                <p>Summary</p>
                {showOrder ? (
                  <HiChevronUp className="h-4 w-4" />
                ) : (
                  <HiChevronDown className="h-4 w-4" />
                )}
              </button>
              <p className="text-xl font-medium text-black">
                <Currency quantity={subTotal + 20} />
              </p>
            </div>
          </div>
          {showOrder && (
            <div className="mx-auto max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16 ">
              <div className="space-y-4 pb-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 text-sm font-medium">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#F1F1F1] text-xs text-white ">
                      <div className="relative h-7 w-7 animate-pulse rounded-md">
                        <FaApple className="h-8 w-8 text-black" />
                      </div>
                      <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs">
                        {product.quantity}
                      </div>
                    </div>
                    <p className="flex-1">{product.description}</p>
                    <p>
                      <Currency
                        quantity={product.price.unit_amount / 100}
                        currency={product.currency}
                      />
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-1 py-4">
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">SubTotal</p>
                  <p className="font-medium">
                    <Currency quantity={subTotal + 20} />
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Discount</p>
                  <p className="text-[gray]"></p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Shipping</p>
                  <p className="font-medium">
                    <Currency quantity={20} currency="USD" />
                  </p>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <p>Total</p>
                <p className="flex items-center gap-x-2 text-xs text-[gray]">
                  USD
                  <span className="text-xl font-medium text-black">
                    <Currency quantity={subTotal + 20} />
                  </span>
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Succsess;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchItems(sessionId);

  return {
    props: {
      products,
    },
  };
};
