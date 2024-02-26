import Image from "next/image.js";
import Link from "next/link.js";
import sneha from "../public/img/sneha.jpg";
import Layout from "../components/Layout.js";
import phyu from "../public/img/al.JPG";


export default function Home() {
  return (
    <Layout metaTitle="Alwin Paul Abraham: Front-end Developer">
      <section className="h-[70vh] flex items-centre justify-center">
        <div className="text-center justify-middle w-8/12 flex m-auto px-5">

          <div className="w-[200px] h-[200px] mb-6 border-4 border-gray-200 dark:border-gray-700 rounded-full">
            <Image
              src={phyu}
              alt="Phyu Phyu Toe"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
          </div>

          <div className="w-3/4 flex pl-20 flex-col items-start">
            <p className="font-semibold text-4xl mb-4 mt-2 capitalize">
              Hi, My Name is Alwin
            </p>
            <p className="">
              and I am a Front-end developer
            </p>
            <div className="sm:flex gap-6 mt-6">
              <Link href="/about">
                <a className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
                >
                  More About Me
                </a>
              </Link>
            </div>
          </div>


        </div>
      </section>
    </Layout>
  );
}
