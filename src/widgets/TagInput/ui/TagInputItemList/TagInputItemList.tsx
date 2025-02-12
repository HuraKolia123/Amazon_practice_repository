// react
import { FC } from "react";
// styles
import styles from "./TagInputItemList.module.scss";
import { TagInputItem } from "../TagInputItem/TagInputItem";
import { ITag } from "../../model/types/types";

interface TagInputItemListProps {
  tags: ITag[];
}

export const TagInputItemList: FC<TagInputItemListProps> = ({ tags }) => {
  return (
    <>
      {tags?.map(({ text }) => {
        return <TagInputItem text={text} key={text} tags={tags} />;
      })}
    </>
  );
};
