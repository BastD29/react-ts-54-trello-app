// import { ChangeEvent, FC, useState } from "react";
// import InputField from "../InputField/InputField";
// import { generateId } from "../../../utils/helpers";
// import { InputFieldType } from "../../../models/InputField";
// import style from "./InputGroup.module.scss";

// const initialValues = [{ id: generateId(), value: "" }];

// const InputGroup: FC = () => {
//   const [inputs, setInputs] = useState<InputFieldType[]>(initialValues);

//   const handleInputChange = (
//     id: string,
//     event: ChangeEvent<HTMLInputElement>
//   ) => {
//     const newInputs = inputs.map((input) =>
//       input.id === id ? { ...input, value: event.target.value } : input
//     );
//     setInputs(newInputs);
//   };

//   const handleAddItem = () => {
//     setInputs([...inputs, { id: generateId(), value: "" }]);
//   };

//   const handleDeleteItem = (id: string) => {
//     setInputs(inputs.filter((input) => input.id !== id));
//   };

//   return (
//     <div className={style["input-group"]}>
//       <div className={style["input-group__inputs"]}>
//         Items
//         {inputs.map((input) => (
//           <InputField
//             key={input.id}
//             id={input.id}
//             value={input.value}
//             onInputChange={handleInputChange}
//             onDeleteItem={handleDeleteItem}
//           />
//         ))}
//       </div>
//       <button type="button" onClick={handleAddItem}>
//         Add Item
//       </button>
//     </div>
//   );
// };

// export default InputGroup;
