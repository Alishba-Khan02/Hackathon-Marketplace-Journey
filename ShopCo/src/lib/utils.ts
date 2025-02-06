import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = <T>(a: T[], b: T[]): boolean => {
  return a.length === b.length && a.every((value, index) => value === b[index]);
};
