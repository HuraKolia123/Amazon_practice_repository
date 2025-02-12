import { FC, useState } from "react";
import styles from "./DoubleRangeSlider.module.scss";

interface DoubleRangeSliderProps {
  minLimit: number;
  maxLimit: number;
  label: string;
  onOkButtonClick: ({
    minValue,
    maxValue,
  }: {
    minValue: number;
    maxValue: number;
  }) => void;
}

export const DoubleRangeSlider: FC<DoubleRangeSliderProps> = ({
  label,
  maxLimit,
  minLimit,
  onOkButtonClick,
}) => {
  const [values, setValues] = useState({
    minValue: minLimit,
    maxValue: maxLimit,
  });

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.topSide}>
        <label>{label}</label>
        <div className={styles.values}>
          ${values.minValue} – ${values.maxValue}
        </div>
      </div>
      <div className={styles.bottomSide}>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={values.minValue}
            onChange={(e) => {
              const value = Math.min(
                Number(e.target.value),
                values.maxValue - 5
              );
              setValues({ ...values, minValue: value });
            }}
            className={`${styles.slider} ${styles.thumbLeft}`}
          />
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={values.maxValue}
            onChange={(e) => {
              const value = Math.max(
                Number(e.target.value),
                values.minValue + 5
              );
              setValues({ ...values, maxValue: value });
            }}
            className={`${styles.slider} ${styles.thumbRight}`}
          />
        </div>
        <button
          className={styles.goBtn}
          onClick={() =>
            onOkButtonClick({
              minValue: values.minValue,
              maxValue: values.maxValue,
            })
          }
        >
          Go
        </button>
      </div>
    </div>
  );
};
