import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" text-white py-20 flex justify-start sm:justify-center">
        <Card />
      </div>
    </>
  );
}
