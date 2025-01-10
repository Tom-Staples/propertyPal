import { useState, useEffect } from 'react';

export default function useGetNotificationCounter(url: string): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    (async function () {
      try {
        // Enable and test once back end configured
        // const response: Response = await fetch(url);
        // if (!response.ok) {
        //   throw response;
        // }
        // setCount(Number(response.text));

        setTimeout(() => {
          setCount(44);
        }, 2000);
      } catch (error) {
        console.error(error);
        setCount(-1);
      }
    })();
  }, [url]);

  return count;
}