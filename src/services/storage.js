export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
