import { Option } from '../Option/Option';
import styles from './OptionList.module.scss';

interface Props {
  options: string[];
  pickOption: (option: string) => void;
}

export const OptionList: React.FC<Props> = ({ options, pickOption }) => {
  return (
    <div className={styles.OptionList}>
      {options.map((item, index) => {
        return <Option value={item} key={index} pickOption={pickOption} />;
      })}
    </div>
  );
};
