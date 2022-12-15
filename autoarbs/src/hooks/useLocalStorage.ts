const useLocalStorage = (key: string) => {
  const localStorageStr = localStorage.getItem(key);
  if (localStorageStr) {
    return JSON.parse(localStorageStr);
  } else {
    return null;
  }
};

export default useLocalStorage;
