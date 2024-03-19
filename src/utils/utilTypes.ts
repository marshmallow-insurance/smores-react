/**
 * this utility type will iterate over the keys of a given type and prefix them with $,
 * effectively converting them into their transient versions.
 */
export type TransientProps<T> = {
  [P in keyof T as `$${string & P}`]: T[P]
}
