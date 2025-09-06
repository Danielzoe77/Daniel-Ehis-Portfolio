export const SectionHeader = ({ 
    title,
    eyebrow,
    description,

}: {
    title: string;
    eyebrow: string;
    description: string;
}
) => {
    return (
        <>
         <div className="flex justify-center items-center">
        <p className="text-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent ">
        {eyebrow}
        </p>
      </div>
      <h2 className="text-center text-3xl font-serif md:text-5xl mt-6">
       {title}
      </h2>
      <p className="text-center lg:text-xl md:text-lg mx-auto max-w-md text-white/60  mt-4">
        {description}
      </p>
      </>
    )
};