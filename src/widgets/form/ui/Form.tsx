import { FC, ReactNode } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import styles from "./Form.module.scss";
import { FormField } from "@/shared/libs/types/formField";

// Тип для конфігурації поля форми

// Пропси для компонента Form
interface FormProps<T> {
  fields: FormField[]; // Масив полів форми
  schema: ZodSchema<T>; // Схема валідації Zod
  onSubmit: (data: T) => void; // Функція обробки submit
  defaultValues?: Partial<T>; // Початкові значення
  formOptions?: UseFormProps; // Додаткові опції для useForm <T>
  submitButtonText?: string; // Текст кнопки
  children?: ReactNode; // Додаткові елементи (опціонально)
}

export const Form: FC<FormProps<any>> = ({
  fields,
  schema,
  onSubmit,
  defaultValues = {},
  formOptions = {},
  submitButtonText = "Submit",
  children,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
    criteriaMode: "all",
    ...formOptions,
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className={styles.inputBlock}>
            <label className={styles.inputLabel}>{field.label}</label>
            <Input
              placeholder={field?.placeholder}
              hookFormName={field.name}
              type={field.type || "text"}
            />
          </div>
        ))}
        <div className={styles.submitButton}>
          <Button type="submit">{submitButtonText}</Button>
        </div>
        {children}
      </form>
    </FormProvider>
  );
};
