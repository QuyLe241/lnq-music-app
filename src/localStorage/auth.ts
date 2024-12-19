export const saveKey = (key: string, value: string): void => {
  const loacalString = JSON.stringify(value);
  localStorage.setItem(key, loacalString);
};

export const getKey = (key: string): string | null => {
  const dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
};

// export const getKeyAdmin = (key: string) => {
//   localStorage.getItem(key);
//   return
// };

export const removeKey = (key: string): void => {
  localStorage.removeItem(key);
};
