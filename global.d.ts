declare type Nullable<T> = T | null
declare type Recordable<T = any> = Record<string, T>

declare type NOOP = () => void

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

declare type Mutable<O> = {
  -readonly [key in keyof O]: O[key]
}

/** app信息 */
declare const __APP_INFO__: Record<string, any>
