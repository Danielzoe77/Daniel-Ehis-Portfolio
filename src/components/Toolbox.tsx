import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const Toolbox = ({ toolboxItems, className, itemsWrapperClassName }: {
  toolboxItems: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string
}) => {
  return <div className={twMerge("flex  [mask-image:linear-gradient(to_right, transparent, black_10%,black_90%,transparent)]", className)}>

    <div className={twMerge("flex flex-none py-1.5 gap-6 pr-6",
       itemsWrapperClassName)}>
      {[...new Array(2)].fill(0).map((_, index)=>(
        <Fragment key={index}>

  {toolboxItems.map((item) => (
        <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg hover:outline-emerald-30 ">
          <TechIcon components={item.iconType} />
          <span className="font-semibold">{item.title}</span>

        </div>
      ))}

        </Fragment>
      )
      )}

    
    </div>

  </div>;
};