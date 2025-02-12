// react
import { FC } from "react";
//assets
import Cross from "../../libs/assets/svg/cross.svg?react";
// styles
import styles from "./TagInputItem.module.scss";
import { ITag } from "../../model/types/types";

interface TagInputItemProps extends ITag {
  tags: ITag[];
}

export const TagInputItem: FC<TagInputItemProps> = ({ text, tags }) => {
  return (
    <div className={styles.TagInputItem}>
      {text}
      {
        <div className={styles.closeIcon}>
          <Cross />
        </div>
      }
    </div>
  );
};
