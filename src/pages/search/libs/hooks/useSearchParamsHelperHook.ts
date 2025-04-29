import { useSearchParams } from "react-router-dom";

export const useSearchParamsHelperHook = () => {
  const [searchParams] = useSearchParams();

  const getParam = <T>(key: string) => searchParams.get(key) as T;

  const getNumberParam = (key: string) => {
    const value = searchParams.get(key);
    return value !== null && !isNaN(Number(value)) ? Number(value) : undefined;
  };
  return {
    getParam,
    getNumberParam,
  };
};
