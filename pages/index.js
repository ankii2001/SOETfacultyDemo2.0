import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MsAshaSohal from "./ms-asha-sohal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faculty Page SOET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/KRMU_LOGO.png" />
      </Head>

      {/* p-3 flex items-center align-middle bg-ankit-50 */}

      <nav class="flex items-center align-middle bg-ankit-50 md:p-3">
        <img
          class="hidden sm:block md:h-20 md:mr-14 "
          src="https://www.krmangalam.edu.in/images/KRMULogo_w.svg"
          alt="krmu logo"
        />
        <img
          class="sm:hidden h-20 p-1.5 "
          src="/KRMU_LOGO.png"
          alt="krmu logo"
        />
        <h1 class="text-2xl md:text-4xl text-white px-1.5 lg:px-auto font-serif">
          School of Engineering & Technology 
        </h1>
      </nav>

      <main className={styles.description}>
        <h1 className="text-2xl lg:text-5xl lg:mt-12 lg:mb-5 italic text-blue-600">Faculty</h1>

        <p class="my-2 text-md text-left lg:text-2xl lg:my-3">
          Well-experienced and distinguished faculty that works diligently to
          transform students into the most desirable personalities every
          industry demands. These through leaders connect with the students to
          identify their career interests and offer them personalized
          mentorship, enabling them to shine in their respective professions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center text-white gap-y-20 gap-x-24">
          
        <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[196px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl lg:mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/dr-vineet-dahiya.jpg"
                height={232}
                width={232}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/dr-kaushal-kumar.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/dr-shweta-bansal.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ms-asha-sohal.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/mr-arvind-kumar.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/mr-ashwani-kumar.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/mr-surendra-kumar-yadav.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ms-kriti-sharma.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

          <div className="backdrop-blur-sm bg-ankit-100 w-[350px] h-[200px] lg:w-[350px] lg:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-3xl mb-2 italic text-stone-900">Music</div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Vocal or instrumental sounds combined in such a way as
                to produce beauty of form, harmony, and expression of emotion.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ms-puja-acharya.jpg"
                height={233}
                width={233}
                className="rounded-r-xl"
              />
            </div>
          </div>

        </div>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
