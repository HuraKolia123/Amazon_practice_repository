// react
import { FC, useState } from "react";
//ui
import { HeaderInput } from "../HeaderInput/HeaderInput";
import { HeaderSelect } from "@/widgets/headerCleverSearch/ui/HeaderSelect/HeaderSelect";
// styles
import styles from "./HeaderCleverSearchInput.module.scss";

interface HeaderCleverSearchInputProps {}

export const HeaderCleverSearchInput: FC<
  HeaderCleverSearchInputProps
> = ({}) => {
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <div className={styles.HeaderCleverSearchInput}>
      <HeaderSelect
        //@ts-ignore
        selectedOption={selectedOption}
        //@ts-ignore
        setSelectedOption={setSelectedOption}
      />
      <HeaderInput onChange={() => {}} value="" />
    </div>
  );
};
