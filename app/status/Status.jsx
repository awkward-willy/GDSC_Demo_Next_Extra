"use client";
import Image from "next/image";
import GitHubPic from "../../public/GitHub_Logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Tilt from "react-parallax-tilt";
export default function Status({data}) {
  console.log(data);
  return (
    <>
      <Navbar />
      <Title content="Status" />
      <div className="flex justify-center flex-wrap min-h-[67vh]">
        {data && data.map((d) => {
          return (
            <Tilt key={d.id}>
              <div className="w-[45vw] m-4 max-w-md flex flex-wrap justify-center items-center flex-col bg-[#C1CADA]">
                <Image
                  src={GitHubPic}
                  alt="ProfilePicture"
                  className="pt-4 m-4 w-[30vw] min-w-[250px] max-w-[400px]"
                />
                <h1>{d.name}</h1>
                <p>{d.language}</p>
                <p>{d.updated_at}</p>
                <a href={d.html_url} target="_blank" className="underline">Link</a>
              </div>
            </Tilt>
          )
        })}
      </div>
      <Footer />
    </>
  );
};
