import { useState, useEffect } from "react";

const useFetchData = (fetchFunction, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error) {
        setErrorMessage("Failed to load data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, isLoading, errorMessage };
};

export { useFetchData };
