import { selectCartItems, selectCartTotal } from "@/store/cartSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartProductList from "@/components/CartProductList";
import Currency from "react-currency-formatter";
import { HiChevronDown } from "react-icons/hi";
import { fetchPostJSON } from "@/utility/apiHelpers";
import getStripe from "@/utility/getStripe";
import { Stripe } from "stripe";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [groupedItemsInCart, setGroupedItemsInCart] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = cartItems.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInCart(groupedItems);
  }, [cartItems]);

  const paymentSess = async () => {
    setLoading(true);
    const session: Stripe.Checkout.Session = await fetchPostJSON(
      "api/payment_session",
      {
        items: cartItems,
      }
    );

    if ((paymentSess as any).statusCode === 500) {
      console.error((paymentSess as any).message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });

    console.warn(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#E7ECEE] ">
      <Head>
        <title>Bag</title>
      </Head>

      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5  ">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {cartItems.length > 0 ? "Review" : "Empty"}
          </h1>
          {cartItems.length === 0 && (
            <button onClick={() => router.push("/")}>
              You don't have any item in your bag. Click to keep browsing
            </button>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mx-5 md:mx-8 ">
            {Object.entries(groupedItemsInCart).map(([key, items]) => (
              <CartProductList key={key} items={items} id={key} />
            ))}
            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>SubTotal</p>
                    <p>
                      <Currency quantity={cartTotal} currency="USD" />
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <p>Shipping</p>
                    <p>$20</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row ">
                      Tax
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Zip Code
                        <HiChevronDown className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$ -</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                    <Currency quantity={cartTotal} currency="USD" />
                  </h4>
                </div>
              </div>
              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">Payment</h4>
                <h3 className="text-2xl font-semibold text-red-600">
                  "YOU CAN USE STRIPE TEST CREDIT CARDS"
                </h3>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="felx order-2 flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      <span>Pay Monthly</span>
                      <span>with Credit Card</span>
                      <span>
                        %0 Interest{" "}
                        <sub className="-top-1">mastercard & visa</sub>
                      </span>
                    </h4>
                    <button
                      onClick={paymentSess}
                      className="hover:opacity-85  cursor-pointer rounded-3xl border border-solid border-sky-600 bg-sky-500 px-4 py-0.5 text-lg font-normal text-white/95 hover:opacity-90">
                      Buy via Credit Card
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-3 flex flex-col text-xl font-semibold">
                      Pay
                      <span className="">
                        <Currency quantity={cartTotal} currency="USD" />
                      </span>
                    </h4>
                    <button
                      onClick={paymentSess}
                      className="hover:opacity-85  cursor-pointer rounded-3xl border border-solid border-sky-600 bg-sky-500 px-4 py-0.5 text-lg font-normal text-white/95 hover:opacity-90">
                      Buy Now !!!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;
