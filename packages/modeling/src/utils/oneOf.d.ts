// borrow from https://stackoverflow.com/questions/49242232/constraining-type-in-typescript-generic-to-be-one-of-several-types/49285826#49285826

export default OneOf;

type OneOf<
  T,
  V extends any[],
  NK extends keyof V = Exclude<keyof V, keyof any[]>
> = { [K in NK]: T extends V[K] ? V[K] : never }[NK];

