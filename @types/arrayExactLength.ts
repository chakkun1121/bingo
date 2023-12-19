export type arrayExactLength<T, N extends number> = ReadonlyArrayExactLengthRec<
  T,
  N,
  readonly []
>;

type ReadonlyArrayExactLengthRec<
  T,
  L extends number,
  Result extends readonly T[]
> = Result["length"] extends L
  ? Result
  : ReadonlyArrayExactLengthRec<T, L, readonly [T, ...Result]>;
