// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./ProductSearchNameInput.module.scss";

interface ProductSearchNameInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const ProductSearchNameInput: FC<ProductSearchNameInputProps> = ({
  setValue,
  value,
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.ProductSearchNameInput}>
      <input
        type="text"
        placeholder="Write the name of product"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};
