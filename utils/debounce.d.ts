/**
 * Debounces a method.
 * @param fn - The function to be debounced.
 * @param delay - The debouncing delay.
 * @returns A debounced version of the function.
 */
export declare const debounce: <Args extends unknown[], R>(fn: (...args: Args) => R, delay: number) => (...args: Args) => void;
