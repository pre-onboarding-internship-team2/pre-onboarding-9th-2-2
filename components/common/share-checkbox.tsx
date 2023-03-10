import { Checkbox } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

interface ShareCheckboxProps {
  data: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  locations: string[];
  setLocations: Dispatch<SetStateAction<string[]>>;
}

const ShareCheckbox = ({
  data,
  value,
  setValue,
  locations,
  setLocations,
}: ShareCheckboxProps) => {
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
    if (!locations.includes(e.target.name)) {
      setLocations((prev) => [...prev, e.target.name]);
    } else {
      setLocations((prev) => prev.filter((item) => item !== e.target.name));
    }
  };

  return (
    <Checkbox checked={value} onChange={checkboxChangeHandler} name={data}>
      {data}
    </Checkbox>
  );
};

export default React.memo(ShareCheckbox);
