import { FC } from "react";
import style from "./Checkbox.module.scss";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const classname = `${checked ? style["checked"] : style["unchecked"]}`;

  return (
    <label className={classname}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
