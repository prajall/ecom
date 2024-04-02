import NewProduct from "@/components/NewProduct";
import ShowCarousel from "@/components/ShowCarousel";

export default async function Home() {
  return (
    <>
      <main className="">
        <ShowCarousel />
        <section className="bg-zinc-50">
          <NewProduct />
        </section>
      </main>
    </>
  );
}
