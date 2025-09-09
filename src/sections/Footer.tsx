import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/Danielzoe77"
  },
  {
    title: "Twiiter",
    href: "https://x.com/d_omoanon"
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ehisomoanon/"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-omoanon/"
  }
]


export const Footer = () => {
  return <footer className="relative z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 "></div>
    <div className="container">
      <div className="border-t border-white/15 md:justify-between py-10 text-sm flex gap-8 flex-col md:flex-row items-center">
        <div className="text-white/40">&copy; 2025 Daniel Omoanon. All rights reserved</div>
       <nav className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 mt-4 md:mt-0">
  {
    footerLinks.map((link) => (
      <a
  href={link.href}
  key={link.title}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 cursor-pointer"
>
        <span className="font-semibold">
          {link.title}
        </span>
        <ArrowUpRightIcon className="size-4" />
      </a>
    ))
  }
</nav>

      </div>
    </div>
  </footer>;
};
