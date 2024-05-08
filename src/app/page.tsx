import Mens from "@/components/Mens";
import NewProduct from "@/components/NewProduct";
import ShowCarousel from "@/components/ShowCarousel";

export default async function Home() {
  return (
    <>
      <main className="">
        <ShowCarousel />
        <section className="mx-auto">
          <NewProduct />
        </section>
        <section className="">
          <Mens />
        </section>
      </main>
    </>
  );
}
