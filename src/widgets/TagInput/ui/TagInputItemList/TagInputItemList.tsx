// react
import { FC } from "react";
//types
import { ITag } from "../../model/types/types";
//ui
import { TagInputItem } from "../TagInputItem/TagInputItem";

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
