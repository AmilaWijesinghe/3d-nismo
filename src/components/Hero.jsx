import { useGSAP } from "@gsap/react";
import { nismo_recaro_front_seatImg, nismo_gtrImg } from "../utils";
import Model from "./Model";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#title", {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    });

    gsap.to(".model", {
      ease: "power1.in",
      opacity: 1,
      y: 0,
      delay: 1,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="mx-16 mt-20 w-full flex md:flex-row flex-col ">
      <div className="flex flex-col w-full">
        <h1
          className="text-sm font-extrabold mb-4 opacity-0 translate-y-10 dark:text-gray-800"
          id="title"
        >
          GT-R® NISMO® FEATURES
        </h1>
        <div className="space-y-2 ">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-gray-800 para">
          Raising the bar to new heights
          </h1>
          <p className="max-w-[600px] pt-5 text-gray-700 dark:text-gray-500 md:text-xl para">
            Track-born performance, road ready. With a fanatically tuned
            600-horsepower engine [*] and a jaw- dropping design, the GT-R®
            NISMO® is an unforgettable driving experience—the purest expression
            of passion, performance, and technology.
          </p>
        </div>
        <div className="mt-5 flex flex-row gap-8 items-center para">
          <img src={nismo_gtrImg} width={200} height={50} />
          <img src={nismo_recaro_front_seatImg} width={150} height={50} />
        </div>
        <button className="mt-5 bg-red-700 p-2 w-[200px] transition-all rounded-md hover:rounded-3xl para">
          Build & Price
        </button>
      </div>

      <div className="flex flex-row w-full relative overflow-hidden">
        <Model />
      </div>
    </div>
  );
};

export default Hero;
