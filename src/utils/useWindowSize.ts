import { useState, useEffect, useCallback, RefObject } from 'react'

export type MeasuredSize = { width: number; height: number }

/**
 * Hook: useWindowSize
 *
 * Responsive measurement utility that returns the current `width` and `height`.
 *
 * Default behaviour (no ref provided):
 * - Tracks the browser viewport using `window.innerWidth` / `window.innerHeight`.
 * - Updates on window resize events.
 *
 * Element measurement (ref provided):
 * - Tracks the rendered size (`offsetWidth` / `offsetHeight`) of the referenced element.
 * - Reacts to intrinsic layout changes via `ResizeObserver` plus window resize as a fallback.
 * - Returns `0` for dimensions until the element is mounted.
 *
 * Performance notes:
 * - Uses a single observer per provided element ref.
 * - Avoid passing a new ref object each render; keep it stable with `useRef`.
 *
 * Return shape is stable: `{ width: number; height: number }`.
 *
 * Example (viewport):
 * ```tsx
 * const { width, height } = useWindowSize();
 * ```
 *
 * Example (element):
 * ```tsx
 * const boxRef = useRef<HTMLDivElement>(null);
 * const size = useWindowSize(boxRef);
 * return <div ref={boxRef}>Measured width: {size.width}</div>;
 * ```
 *
 * @param targetRef Optional ref to an HTMLElement whose size you want to observe.
 * @returns Current measured size `{ width, height }`.
 */
export function useWindowSize(
  targetRef?: RefObject<HTMLElement | null>,
): MeasuredSize {
  const isBrowser = typeof window !== 'undefined'

  const getSize = useCallback((): MeasuredSize => {
    if (targetRef?.current) {
      const el = targetRef.current
      return {
        width: el?.offsetWidth ?? 0,
        height: el?.offsetHeight ?? 0,
      }
    }
    return {
      width: isBrowser ? window.innerWidth : 0,
      height: isBrowser ? window.innerHeight : 0,
    }
  }, [targetRef, isBrowser])

  const [viewport, setViewport] = useState<MeasuredSize>(getSize())

  // Element-specific effect when a ref is provided
  useEffect(() => {
    if (!targetRef) return
    const el = targetRef.current
    if (!el) return

    const handleObserve = () => setViewport(getSize())
    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(handleObserve)
        : null
    if (observer) observer.observe(el)
    if (isBrowser) window.addEventListener('resize', handleObserve)
    handleObserve()
    return () => {
      if (observer) observer.disconnect()
      if (isBrowser) window.removeEventListener('resize', handleObserve)
    }
  }, [getSize, isBrowser, targetRef])

  // Window fallback effect when no ref provided
  useEffect(() => {
    if (targetRef) return
    function handleResize() {
      setViewport(getSize())
    }
    if (isBrowser) {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [getSize, isBrowser, targetRef])

  return viewport
}
