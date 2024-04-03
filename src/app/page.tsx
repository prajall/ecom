import Mens from "@/components/Mens";
import NewProduct from "@/components/NewProduct";
import ShowCarousel from "@/components/ShowCarousel";

export default async function Home() {
  return (
    <>
      <main className="">
        <ShowCarousel />
        <section className=" dark:bg-gray-900">
          <NewProduct />
        </section>
        <section className="bg-zinc-100 dark:bg-gray-900">
          <Mens />
        </section>
      </main>
    </>
  );
}
