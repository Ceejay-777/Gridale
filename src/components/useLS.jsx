import { useEffect, useState } from "react";

const getSaved = (key, initialValue) => {
  saved = JSON.parse(localStorage.getItem(key));
  if (saved) {
    return saved;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    getSaved(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
