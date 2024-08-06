import Image from "next/image";

interface metricProps {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean; // if true, add author styles to the component
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyle,
  isAuthor,
}: metricProps) => {
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href && "rounded-full"}`}
      />
      <p className={`${textStyle} flex items-center gap-1`}>
        {value} {title}
      </p>
    </div>
  );
};

export default Metric;
