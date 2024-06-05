import { getProjects } from "@/sanity/sanity-utils";
import EmailInput from "@/components/emailInputs";
import "@/app/globalSecondary.css";
import { ImageSlider } from "./projects/[proejct]/ImageSlider";
import myFace from "@/img/myFace.jpg";
import Image from "next/image";

export const revalidate = 60;
export default async function Home() {
  const projects = await getProjects();

  console.log("Fetched Projects:", projects);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="text-7xl font-extrabold">Who Is Chris?</h1>
          <p className="mt-3 text-xl">
            Welcome to my page. I am a fullstack developer with three years of
            experience based out of Florida.
          </p>
        </div>
        <Image
          src={myFace}
          alt="my image"
          width={400}
          height={400}
          className="object-cover rounded-full border border-gray-500 ml-4"
        />
      </div>

      <div className="flex flex-col">
        <div className="mt-5 ">
          <h2 className="mt-24 font-bold text-white-700 text-3x1 flex items-center justify-center">
            My Projects
          </h2>

          <div className="mt-16 w-85">
            <ImageSlider imageUrls={projects} />
          </div>
        </div>
        <div className="flex items-center justify-center h-screen mt-24">
          <EmailInput />
        </div>
      </div>
    </div>
  );
}
