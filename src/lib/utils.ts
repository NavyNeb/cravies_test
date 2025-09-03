import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/*
* @description Utility function to merge and optimize Tailwind CSS class names.
* @param {...ClassValue} inputs - An array of class names or conditional class objects.
* @returns {string} A single string with merged and optimized class names.
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* 
* @description Utility function to concatenate class names conditionally.
* @param {...string} classes - An array of class names.
* @returns {string} A single string with all class names concatenated, separated by spaces.
*/
export function classNames(...classes: string[]): string{
  return classes.filter(Boolean).join(' ')
}