import { useEffect, useState } from "react";

const getSaved = (key, initialValue) => {
  const saved = sessionStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
};

const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(getSaved(key, initialValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
