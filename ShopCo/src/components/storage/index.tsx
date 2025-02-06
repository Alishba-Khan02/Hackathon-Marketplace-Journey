import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(key: string) {
      console.warn(`getItem called with key: ${key}`);
      return Promise.resolve(null);
    },
    setItem(key: string, value: string) {
      console.warn(`setItem called with key: ${key}, value: ${value}`);
      return Promise.resolve(value);
    },
    removeItem(key: string) {
      console.warn(`removeItem called with key: ${key}`);
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;

