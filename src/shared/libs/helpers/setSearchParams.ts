interface SetSearchParamsArgs {
  [key: string]: string | number;
}

export const setSearchParams = (params: SetSearchParamsArgs) => {
  const currentParams = new URLSearchParams(window.location.search);

  for (const param in params) {
    if (params[param]) {
      currentParams.set(param, String(params[param]));
    } else {
      currentParams.delete(param);
    }
  }

  const newSearchParams = currentParams.toString();

  const newUrl = newSearchParams
    ? `?${newSearchParams}`
    : window.location.pathname;

  history.pushState(null, "", newUrl);

  window.dispatchEvent(new Event("searchparamschange"));
};
