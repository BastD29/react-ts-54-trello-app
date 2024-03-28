import { FC, useState } from "react";
import style from "./Checkbox.module.scss";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  // const classname = `${isChecked ? style["checked"] : style["unchecked"]}`;
  const classname = `${checked ? style["checked"] : style["unchecked"]}`;

  // console.log("checked:", checked);

  return (
    <label className={classname}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
