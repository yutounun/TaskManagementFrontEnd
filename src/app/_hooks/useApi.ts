import { useState, useEffect } from "react";

function useApi(url, method, param) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      };

      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, param]);

  return { data, loading, error };
}

export default useApi;
