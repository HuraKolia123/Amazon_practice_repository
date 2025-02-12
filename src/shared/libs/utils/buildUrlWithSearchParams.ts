interface BuildUrlWithSearchParamsFunc {
  (
    path: string,
    queryParams: {
      [key: string]: string;
    }
  ): string;
}

export const buildUrlWithSearchParams: BuildUrlWithSearchParamsFunc = (
  path,
  queryParams = {}
) => {
  const queryString = new URLSearchParams(queryParams).toString();
  return queryString ? `${path}?${queryString}` : path;
};
