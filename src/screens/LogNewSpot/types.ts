export const INPUT_TYPE_KEYS = [
  "name",
  "address",
  "conditions",
  "garbage",
] as const;

export type InputTypeKeys = typeof INPUT_TYPE_KEYS[number];

export type InputType = {
  type: InputTypeKeys;
  value: string;
};
