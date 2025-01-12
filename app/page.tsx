import CategoryFilter from "./_components/CategoryFilter";
import PropertyList from "./_components/PropertyList";



export default async function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start gap-6 px-8 sm:px-14">
      <CategoryFilter />
        <PropertyList />
      </div>
    </>
  );
}
