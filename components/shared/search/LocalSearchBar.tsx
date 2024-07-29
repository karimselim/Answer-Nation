"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

// interface props {
//   _id: number;
//   name: string;
//   totalQuestions: number;
//   showCount: boolean; // default: true  | false: hide count  | undefined: hide count and show totalQuestions  | number: show specific count  | string: show specific count and append a unit  | function: show specific count based on a function argument  | JSX.Element: show specific count and append a unit with JSX content  | React.FC: show specific count and append a unit with a custom component  | React.ReactNode: show specific count and append a unit with a custom ReactNode content  | React.ReactChild: show specific count and append a unit with a custom ReactChild content  | React.ReactFragment: show specific count and append a unit with a custom ReactFragment content  | React.Suspense: show specific count and append a unit with a custom Suspense content  | React.Lazy: show specific count and append a
// }

interface customInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: customInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus background-light800_darkgradient border-none shadow-none outline-none "
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
