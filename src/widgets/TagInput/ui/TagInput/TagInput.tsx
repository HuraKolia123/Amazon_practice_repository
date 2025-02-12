// react
import { Dispatch, FC, ReactNode, useState } from "react";
// ui
import { TagInputItemList } from "../TagInputItemList/TagInputItemList";
import { TagAddInput } from "../TagAddInput/TagAddInput";
// styles
import styles from "./TagInput.module.scss";
import { ITag } from "../../model/types/types";

interface TagInputProps {
  tags: ITag[];
  setTags: Dispatch<React.SetStateAction<ITag[]>>;
}

export const TagInput: FC<TagInputProps> = ({ setTags, tags }) => {
  return (
    <div className={styles.TagInput}>
      <TagInputItemList tags={tags} />
      <TagAddInput setTags={setTags} />
    </div>
  );
};
