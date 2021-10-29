import React, { useEffect, useState } from "react"
const Debounce = (value, delay = 800) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      
      return () => {
        clearTimeout(handler);
      };
    }, [value]);
  
    return debouncedValue;
  }

export default Debounce;