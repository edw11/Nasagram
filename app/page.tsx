import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-20 sm:py-24 gap-10 ">
        <div className=" text-white flex justify-start sm:justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
}
