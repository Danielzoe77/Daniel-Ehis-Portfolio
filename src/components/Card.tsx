
import { twMerge } from 'tailwind-merge';
import grainImage from '../assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "relative bg-gray-800 rounded-3xl mt-10  overflow-hidden z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-white/20 after:-outline-offset-2 after:pointer-events-none after:outline-2 after:rounded-3xl",
        className
      )}
      {...other}
    >
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Content */}
      {children}
    </div>
  );
};
