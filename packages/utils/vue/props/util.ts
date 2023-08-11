export type IfNever<T, Y = true, N = false> = T extends [never] ? Y : N;
export type IfUnknow<T, Y, N> = [unknown] extends T ? Y : N;
export type UnknownToNever<T> = IfUnknow<T, never, T>;
export type Writable<T> = { readonly [P in keyof T]: T[P] }
export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T

export {};