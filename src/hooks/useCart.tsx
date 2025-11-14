import { useEffect, useState } from "react";

export function useCart<T>(key: string, initialValue: T) {
  const [storedItem, setStoredItem] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredItem(JSON.parse(item));
      }
    } catch (error) {
      console.error("Erro ao acessar localStorage:", error);
    }
  }, [key]);

  const updateLocalStorage = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredItem(newValue);
    } catch (error) {
      console.error("Erro ao atualizar localStorage:", error);
    }
  };

  return { storedItem, updateLocalStorage };
}
