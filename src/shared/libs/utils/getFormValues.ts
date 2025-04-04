import { FormEvent } from "react";

export const getFormValues = <T>(e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const formValues = Object.fromEntries(formData.entries()) as T;

  return formValues;
};
