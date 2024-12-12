import { useState, useEffect } from "react";

// Custom hook useDebounce
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout để trì hoãn việc cập nhật giá trị debounced
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup hàm setTimeout khi giá trị hoặc delay thay đổi
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Hook chạy lại khi `value` hoặc `delay` thay đổi

  return debouncedValue; // Trả về giá trị đã trì hoãn
};

export default useDebounce;
