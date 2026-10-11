import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Zero-pad a 1-based index for section numbering, e.g. 1 -> "01". */
export function padIndex(index: number): string {
  return String(index).padStart(2, "0");
}
