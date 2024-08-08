import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (yearsAgo > 0) return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  if (monthsAgo > 0) return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  if (weeksAgo > 0) return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  if (daysAgo > 0) return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  if (hoursAgo > 0) return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  if (minutesAgo > 0)
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  return `${secondsAgo} second${secondsAgo > 1 ? "s" : ""} ago`;
};

export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // For millions
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"; // For thousands
  } else {
    return num.toString(); // For numbers less than 1,000
  }
};
