import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValude, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValude;
}

export default useDebounce;
