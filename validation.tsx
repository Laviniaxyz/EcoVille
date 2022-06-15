export const isEmail = (text: string): boolean => {
  const result =
    text &&
    text.length >= 4 &&
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      text
    );
  return !!result;
};

export const isPassword = (text: string): "" | boolean => {
  const result = text && text.length >= 6;
  return result;
};

export const isEmpty = (text: string | undefined): boolean => {
  const result = text && text.length > 0;
  return !result;
};
