import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes with clsx and tailwind-merge.
 * This is essential for building clean, reusable components and handling dynamic styles.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
