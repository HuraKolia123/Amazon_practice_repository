interface BuildUrlWithSearchParamsFunc {
  (
    path: string,
    queryParams: {
      [key: string]: string | number;
    }
  ): string;
}

export const buildUrlWithSearchParams: BuildUrlWithSearchParamsFunc = (
  path,
  queryParams = {}
) => {
  const queryString = new URLSearchParams();

  Object.entries(queryParams).map(([key, value]) => {
    if (value) {
      queryString.append(key, String(value));
    }
  });

  queryString.toString();

  return queryString ? `${path}?${queryString}` : path;
};
