import { useSyncExternalStore } from "react";

export const useSingleSearchParam = (paramName: string) => {
  const getSnapshot = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName) ?? null;
  };

  const subscribe = (onStoreChange: () => void) => {
    let lastValue = getSnapshot();

    const handler = () => {
      const newValue = getSnapshot();
      if (newValue !== lastValue) {
        lastValue = newValue;
        onStoreChange();
      }
    };

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handler();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handler();
    };

    window.addEventListener("popstate", handler);
    window.addEventListener("searchparamschange", handler);

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handler);
      window.removeEventListener("searchparamschange", handler);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};
