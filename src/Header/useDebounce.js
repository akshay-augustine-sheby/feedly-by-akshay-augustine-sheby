import React, { useEffect, useState } from "react"
const useDebounce = (value, delay = 800) => {
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