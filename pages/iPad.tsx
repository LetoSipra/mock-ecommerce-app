import DynamicCart from "@/components/DynamicCart";
import IpadLanding from "@/components/Landings/IpadLanding";
import Product from "@/components/Product";
import { fetchCategories } from "@/utility/fetchCategories";
import { fetchProducts } from "@/utility/fetchProducts";
import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  const filterByPage = categories.filter((filter) => filter.page === "iPad");

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === filterByPage[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };

  return (
    <>
      <Head>
        <title>Apple - iPad</title>
      </Head>
      <DynamicCart />
      <main className="relative -z-10 h-[200vh] bg-gradient-to-r from-black to-black md:z-0">
        <IpadLanding />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#f5f5f7] ">
        <div className="space-y-10 py-16  ">
          <h1 className="text-center text-4xl tracking-wide text-black md:text-5xl ">
            Which iPad is right for you?
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {filterByPage.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 !px-14 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected ? "tabEff  text-black" : "border-b-2  text-black"
                    }`
                  }>
                  {category.label}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);
  return {
    props: {
      categories,
      products,
      session,
    },
  };
};
