import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

export const ContactSection = () => {
  return <div className="py-16 pt-12 lg:pt-20 lg:py-24">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 py-8 px-10 font-bold  text-gray-900 text-center md:text-left overflow-hidden rounded-3xl z-0 relative ">
        <div className="absolute opacity-5 inset-0 -z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
          <h2 className="font-serif md:text-3xl text-2xl"> Let&apos;s create something amazing together</h2>
          <p className="text-sm md:text-base mt-2">
            Ready to bring your next project to life ? Lets connect and discuss how I can help you achieve your goals
          </p>
          </div>
          <div>
          <button className="inline-flex items-center border-gray-900 px-6 h-12 rounded-xl text-white w-max bg-gray-900 " >
            <span className="text-sm font-semibold"> Contact Me</span>

            <ArrowUpRight className="size-4" />
          </button>
          </div>

        </div>
      </div>
    </div>
  </div>;
};
