// react
import { ChangeEvent, Dispatch, FC, useState } from "react";
// styles
import { ITag } from "../../model/types/types";
import { Input } from "@/shared/ui/Input";

interface TagAddInputProps {
  setTags: Dispatch<React.SetStateAction<ITag[]>>;
}

export const TagAddInput: FC<TagAddInputProps> = ({ setTags }) => {
  const [text, setText] = useState("");

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTag = () => {
    setTags((prev) => [...prev, { text: text }]);
    setText("");
  };

  const onEnterAddTag = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  return (
    <Input
      onChange={onTextChange}
      value={text}
      placeholder="Add tag"
      type="text"
      onKeyDown={onEnterAddTag}
      maxWidth={"53px"}
    />
  );
};
