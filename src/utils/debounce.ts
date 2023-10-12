/**
 * Debounces a method.
 * @param fn - The function to be debounced.
 * @param delay - The debouncing delay.
 * @returns A debounced version of the function.
 */
export const debounce = <Args extends unknown[], R>(
  fn: (...args: Args) => R,
  delay: number,
): ((...args: Args) => void) => {
  let timeout: NodeJS.Timeout | undefined

  return (...args: Args): void => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn(...args)
      timeout = undefined
    }, delay)
  }
}
