const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";

export async function getItemByName(itemName) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/api/market/${itemName}`,
    fetcher
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
