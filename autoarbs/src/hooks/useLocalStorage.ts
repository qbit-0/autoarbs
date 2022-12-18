const useLocalStorage = (key: string) => {
  const localStorageStr = localStorage.getItem(key);
  if (!localStorageStr || localStorageStr === "undefined") return null;
  return JSON.parse(localStorageStr);
};

export default useLocalStorage;
