
"use client"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import StarIcon from "@/assets/icons/star.svg";
import booksImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import PythonIcon from "@/assets/icons/python.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import SwiftIcon from "@/assets/icons/swift.svg";
import CssIcon from "@/assets/icons/css3.svg";
import mapImage from "@/assets/images/map.png";
import SmileMemo from "@/assets/images/memoji-avatar-1.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";
import {motion} from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
   {
    title: "Swift",
    iconType: SwiftIcon,
  },
   {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
   {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
   {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "python",
    iconType: PythonIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: '✈️',
    left:"5%",
    top:"5%"

  },
  {
    title: "Reading",
    emoji: '📕',
     left:"50%",
    top:"5%"
  },
    {
    title: "Football",
    emoji: '📕',
     left:"10%",
    top:"35%"
  },
    {
    title: "Working Out",
    emoji: '📕',
     left:"35%",
    top:"40%"
  },
    {
    title: "Worshp",
    emoji: '📕',
     left:"70%",
    top:"45%"
  },
    {
    title: "Networking",
    emoji: '📕',
     left:"5%",
    top:"65%"
  },
  {
    title: "Fitness",
    emoji: '📕',
     left:"45%",
    top:"70%"
  },
]



export const AboutSection = () => {
  const constraintRef =  useRef(null)
  return <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse into my world" description="Learn More About Me, Who i am and what i do" />
    <div className="mt-20 flex flex-col md:flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3"  >
     <Card className="h-[320px] col-span-2 md:col-span-2 lg:col-span-1 ">
        <CardHeader title="My Reads" description="A collection of books i have read and enjoyed" />
        <div className="mt-2 md:mt-0 mx-auto w-40">
        <Image src={booksImage} alt="books" className="h-full object-cover" />
        </div>
      </Card>
      {/* <Card className="p-0 h-[320px] col-span-3">
        <CardHeader title="My Toolbox" description="Explore the technology and tools use to craft my digital world" className="px-6 pt-6 " />
        <div className="mt-8 mx-auto w-40"> 
        <Image src={booksImage} alt="books" className="object-contain" />
        </div>
      </Card> */}
    
        {/* <Card className="p-8 h-[320px]">
        <CardHeader title="Beyond the code" description="Explore my interests and passions beyond the code" />
        <div className="mt-8 mx-auto w-40">
        <Image src={booksImage} alt="books" className="object-contain" />
        </div>
      </Card> */}
      <Card className="p-2 h-[320px] lg:col-span-2 md:col-span-3">
         <CardHeader title="My Toolbox" description="Explore the technology and tools use to craft my digital world" />
       <Toolbox toolboxItems={toolboxItems} className="mt-[-4] pb-[-2]" itemsWrapperClassName="animate-move-left [animation-duration:50s] " />
        <Toolbox toolboxItems={toolboxItems} className="mt-[-4] pb-6 "
        itemsWrapperClassName=" animate-move-right [animation-duration:40s]" />
      </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-5">
      <Card className=" md:col-span-3 h-[320px] lg:col-span-2 flex flex-col">
        <CardHeader title="Beyond the code" description="Explore my interests and passions beyond the code"
        className="" />
        <div className="relative flex-1 " ref = {constraintRef}>
          {hobbies.map((hobby) => (
            <motion.div key={hobby.title} className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 gap-4 absolute"
            style={{left:hobby.left,top:hobby.top}}
            drag
            dragConstraints = {constraintRef}
            >
              
              <span className="font-medium text-gray-950" >{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </motion.div>
          ))}
        </div>
      </Card>
      <Card className="md:col-span-2 p-0 h-[320px] lg:col-span-1 relative">
        <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full after:content-['']
         after:absolute after:inset-0 after:outline after:-outline-2 after:outline-offset-2 
         after:rounded-full after:outline-gray-950/30">
          <div className="absolute inset rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 size-20 -z-20 animate-ping [animation-duration:2s]">
          </div>
          <div className="absolute inset rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 size-20 -z-10 ">
          </div>
          <Image src={SmileMemo} alt="map" className="object-contain size-20" />
          </div>
      </Card>
      </div>
    </div>
    </div>
  </div>;
};
