import { useState, useEffect } from "react";

/** UseLocalStorage custom hook.
 *
 * This hook abstracts getting/setting the value of a key in local storage.
 *
 * Props:
 * - key: string value of a key in local storage
 *
 * State:
 * - value: string value for the key in the local storage
 *
 */

function useLocalStorage(key) {
  // use lazy initializer with useState
  // so that we retrieve the value for the key from
  // local storage only for the first render of the component
  const [value, setValue] = useState(() => localStorage.getItem(key));

  console.debug("useLocalStorage...", "value=", value);

  useEffect(() => {
    console.debug("useLocalStorage useEffect...", "value=", value);
    if (value) {
      localStorage.setItem(key, value);
    } else if (value === null || value === undefined) {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
