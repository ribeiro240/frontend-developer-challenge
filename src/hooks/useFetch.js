import { useEffect, useState } from 'react';

const useFetch = (initialUrl) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    //if url is null, don't fetch
    if (!url) return

    setIsLoading(true);
    setError(null);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (data.cod >= 400) {
          setError(data.message)
          return;
        }
        setData(data.products) //returns only the products array from data
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      })
  }, [url]);

  return { data, error, setError, isLoading, setIsLoading, setUrl };
};

export default useFetch;