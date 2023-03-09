import React, { Dispatch, SetStateAction } from "react";
import { Select } from "@chakra-ui/react";
import { OptionsType } from "@/helpers/options";

interface ShareSelectProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: OptionsType[];
  placeholder: string;
}

const ShareSelect = ({
  value,
  setValue,
  options,
  placeholder,
}: ShareSelectProps) => {
  const changeOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <Select
      value={value}
      onChange={changeOptionHandler}
      placeholder={placeholder}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};

export default React.memo(ShareSelect);
