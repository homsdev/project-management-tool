import { useState, useEffect } from "react";

const useDataFetching = (dataSource) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();

        if (result) {
          setLoading(false);
          setData(result);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
        setData([]);
      }
    }

    fetchData();
  }, [dataSource]);

  return [loading, error, data];
};

export default useDataFetching;
