const getSessionStorage = (key, initialValue) => {
  const saved = sessionStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  sessionStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
};

const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export {getSessionStorage, setSessionStorage};
