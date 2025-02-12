// styles
import styles from "./Option.module.scss";

interface Props {
  value: string;
  pickOption: (option: string) => void;
}

export const Option: React.FC<Props> = ({ value, pickOption }) => {
  const onChangeOptionClick = () => {
    pickOption(value);
  };

  return (
    <div className={styles.Option} onClick={onChangeOptionClick}>
      {value}
    </div>
  );
};
