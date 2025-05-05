import { FC, useRef } from "react";
// styles
import styles from "./InputRange.module.scss";

interface InputRangeProps {
  min: number;
  max: number;
  label: string;
  id: string;
  onOkButtonClick: (value: number) => void;
  currentValue: number;
}

export const InputRange: FC<InputRangeProps> = ({
  max,
  min,
  label,
  id,
  onOkButtonClick,
  currentValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    onOkButtonClick(inputRef.current?.valueAsNumber || 0);
  };

  return (
    <div className={styles.InputRange}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} id={id} type="range" min={min} max={max} />
      <span>{currentValue}</span>
      <button onClick={onButtonClick}>OK</button>
    </div>
  );
};
