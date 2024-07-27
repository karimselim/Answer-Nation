import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount: boolean; // default: true  | false: hide count  | undefined: hide count and show totalQuestions  | number: show specific count  | string: show specific count and append a unit  | function: show specific count based on a function argument  | JSX.Element: show specific count and append a unit with JSX content  | React.FC: show specific count and append a unit with a custom component  | React.ReactNode: show specific count and append a unit with a custom ReactNode content  | React.ReactChild: show specific count and append a unit with a custom ReactChild content  | React.ReactFragment: show specific count and append a unit with a custom ReactFragment content  | React.Suspense: show specific count and append a unit with a custom Suspense content  | React.Lazy: show specific count and append a
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      {/* <div>{name} - {totalQuestions}</div> */}
      <Badge
        className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase"
        variant="outline"
      >
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
