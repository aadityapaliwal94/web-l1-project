import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export function useLocalStorageArray(key, initialValue = []) {
  // pageNumber should start from 0.
  const getItems = (pageNumber = 0, size = 5) => {
    if (!isBrowser) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      const data = Array.isArray(parsed) ? parsed : initialValue;
      if (data.length > size) {
        const startIndex = pageNumber * size
        const endNumber = (startIndex + size)
        console.log("startIndex " + startIndex + " endNumber " + endNumber)
        return data.slice(startIndex, endNumber)
      } else {
        if (pageNumber == 0) {
          return data
        } else {
          return []
        }        
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const getAllItems = () => {
    if (!isBrowser) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      return Array.isArray(parsed) ? parsed : initialValue;      
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [items, setItems] = useState(getAllItems);

  useEffect(() => {
    setItems(getAllItems());    
  }, [key]);

  /**
   * Add item(s) to existing array
   * @param {Object | Object[]} newItem
   */
  const addItem = (newItem) => {
    if (!isBrowser) return;

    setItems((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      const updated = Array.isArray(newItem)
        ? [...safePrev, ...newItem]
        : [...safePrev, newItem];

      window.localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  };

  /**
   * Replace entire array (optional utility)
   */
  const setAll = (newArray) => {
    if (!Array.isArray(newArray)) return;
    setItems(newArray);
    window.localStorage.setItem(key, JSON.stringify(newArray));
  };

  /**
   * Remove item by predicate or id
   */
  const removeItem = (predicate) => {
    setItems((prev) => {
      const updated =
        typeof predicate === "function"
          ? prev.filter((item) => !predicate(item))
          : prev.filter((item) => item.id !== predicate);

      window.localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  };

  /**
   * Clear storage
   */
  const clear = () => {
    window.localStorage.removeItem(key);
    setItems([]);
  };

  return {
    items,
    getItems,
    addItem,
    setAll,
    removeItem,
    clear,
  };
}
