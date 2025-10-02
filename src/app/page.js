import Devprocess from "@/components/Devprocess";
import Miniabout from "@/components/Miniabout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-16">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/laptop.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 md:flex justify-center items-center lg:mt-8">
          <div className="justify-center items-center lg:text-left lg:mr-20">
            <h1 className=" text-2xl text-center font-bold text-white mb-4 md:text-5xl lg:text-6xl lg:-mt-16">
              Welcome to TechXima
            </h1>
            <p className="text-xl font-bold text-white text-center mb-6 md:text-3xl">
              Home of all your tech solutions
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/Manager.jpg" alt="Hero Image" className="w-70 h-70 rounded" />
          </div>
        </div>
        {/* Styled Buttons */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-4 mt-8">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 text-center rounded-3xl text-lg font-semibold shadow hover:bg-gray-900 transition"
          >
            Get in Touch
          </Link>
          <Link
            href="/about"
            className="bg-black text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow hover:bg-gray-900 transition text-center"
          >
            TechXima Group
          </Link>
        </div>
      </div>
      <Miniabout/>
      <Devprocess/>
    </section>
  );
}
