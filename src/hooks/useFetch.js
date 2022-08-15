import { useState, useEffect } from "react";

export function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw response;
        }
        const json = await response.json();
        setResponse(json);
        setError(false);
      } catch ({ status, statusText }) {
        setError({
          status,
          statusText,
        });
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return [response, error, loading];
}
