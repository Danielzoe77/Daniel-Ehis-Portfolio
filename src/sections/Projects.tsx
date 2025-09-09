import BigfredoLandingPage from "@/assets/images/big-fredo.png";
import eathathonMenu from "@/assets/images/eathathon.png";
import cloneGemini from "@/assets/images/gemini clone.png";
import reactStore from "@/assets/images/react store.png";
import weatherApp from "@/assets/images/weather app.png";
import digitalAgency from "@/assets/images/digital agency.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Big Fredo Cleaning Services",
    year: "2020",
    title: "Big Fredo Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://bigfredocleaning.vercel.app/",
    image: BigfredoLandingPage,
  },
  {
    company: "De Green Eatery",
    year: "2021",
    title: "Eathathon Ecommerce website",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Added new menu items" },
      { title: "Customers can order food online" },
    ],
    link: "https://eathathon.vercel.app/",
    image: eathathonMenu,
  },
  {
    company: "Weather Forecast App",
    year: "2022",
    title: "Weather Forecast Web Application",
    results: [
      { title: "Interactive Weather Forecast Dashboard" },
      { title: "Seamless Weather Monitoring Experience" },
      { title: "Accurate Weather Tracking Web App" },
    ],
    link: "https://weather-app-zoe.vercel.app/",
    image: weatherApp,
  },
  {
    company: "AI Startup",
    year: "2024",
    title: "Clonining Gemini AI website",
    results: [
      { title: "Improved conversational interface for a smoother user experience" },
      { title: "Integrated prompt-based input for real-time AI responses" },
      { title: "Optimized for mobile, boosting engagement by 35%" },
    ],
    link: "https://clone-ai-eight.vercel.app/",
    image: cloneGemini,
  },
  {
    company: "Digital Marketing Agency",
    year: "2024",
    title: "High-Performance Marketing Website",
    results: [
      { title: "Streamlined navigation for a smoother client journey" },
      { title: "Integrated campaign management tools for real-time updates" },
      { title: "Optimized for mobile, increasing on-the-go engagement by 35%" },
    ],
    link: "https://ophirbrooks.vercel.app/",
    image: digitalAgency ,
  },
  {
    company: "Single Page Ecommerce",
    year: "2022",
    title: "Ecommerce website built with typescript",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Faster loading times" },
      { title: "Strictly for desktop view" },
    ],
    link: "https://reactstore-ecommerce.vercel.app/",
    image: reactStore,
  },

];

export const ProjectsSection = () => {
  return <section id="projects"  className="pb-10 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Delivering tangible results" title="Featured Projects" description="See how i can transform concepts into engaging digital experiences" />

      <div className="flex md:mt-20 flex-col gap-20 mt-10">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 lg:pt-16 lg:px-20 pb-0 lg:pb-0 md:pt-12 md:px-10 pt-4 sticky top-0 "
            style={{
              top: `calc(64px + ${projectIndex * 40}px}`,
            }}  >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                  <span>
                    {
                      project.company
                    }
                  </span>
                  <span>
                    &bull;
                  </span>
                  <span>
                    {
                      project.year
                    }
                  </span>
                </div>

                <h3 className="text-2xl font-serif md:mt-5 mt-2">{project.title}</h3>
                <hr className="border-t-2 md:mt-5 border-white/5 mt-4" />
                <ul className="flex flex-col md:mt-5 gap-4 mt-4" >
                  {
                    project.results.map((result, index) => (
                      <li className="flex gap-2 text-sm md:text-base mt-2  text-white/50 ">
                        <CheckIcon className="inline-block md:size-6 size-5 mr-2" />
                        <span>{result.title}</span></li>
                    ))
                  }
                </ul>

                <a href={project.link}>
                  <button className="bg-white gap-2 px-6 md:w-auto mt-8 text-gray-950 h-12 rounded-xl font-semibold w-full">
                    <span>Visit Live site </span>
                    <ArrowUpRightIcon className="inline-block size-4 ml-2" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 lg:w-auto lg:max-w-none lg:absolute lg:h-full md:-mb-0 lg:mt-0  -mb-4" />
              </div>
            </div>

          </Card>
        ))}
      </div>
    </div>
  </section>;
};
