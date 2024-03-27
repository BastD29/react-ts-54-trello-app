// import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import InputField from "../../inputs/InputField/InputField"; // Assuming this is a generic component
// import style from "./GenericForm.module.scss";
// import { FormDataType, GenericFormProps } from "../../../models/Form";

// const GenericForm: FC<GenericFormProps> = ({
//   entityId,
//   entityType,
//   initialValues,
//   onSubmit,
//   itemLabel = "Item",
// }) => {
//   const isEditMode = Boolean(entityId);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormDataType>(initialValues);

//   useEffect(() => {
//     if (isEditMode) {
//       // Fetch entity to edit based on entityType and set initial form data accordingly
//     }
//   }, [entityId, entityType, isEditMode]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Item operations
//   const handleItemChange = (itemId: string, newName: string) => {
//     setFormData({
//       ...formData,
//       items: formData.items.map((item) =>
//         item.id === itemId ? { ...item, name: newName } : item
//       ),
//     });
//   };

//   const handleAddItem = () => {
//     const newItem = { id: Date.now().toString(), name: "" };
//     setFormData({
//       ...formData,
//       items: [...formData.items, newItem],
//     });
//   };

//   const handleDeleteItem = (itemId: string) => {
//     setFormData({
//       ...formData,
//       items: formData.items.filter((item) => item.id !== itemId),
//     });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form className={style["generic-form"]} onSubmit={handleSubmit}>
//       <h2>{isEditMode ? `Edit ${entityType}` : `Add New ${entityType}`}</h2>
//       <div>
//         {Object.entries(initialValues).map(([key, value]) =>
//           key !== "items" ? (
//             <label key={key}>
//               {key}
//               <input
//                 type="text"
//                 value={formData[key]}
//                 onChange={(e) =>
//                   setFormData({ ...formData, [key]: e.target.value })
//                 }
//               />
//             </label>
//           ) : null
//         )}
//       </div>
//       <div>
//         <h3>{itemLabel}s</h3>
//         {formData.items.map((item, index) => (
//           <InputField
//             key={item.id}
//             id={item.id}
//             value={item.name}
//             placeholder={`${itemLabel} Name`}
//             onInputChange={(e) => handleItemChange(item.id, e.target.value)}
//             onDeleteItem={() => handleDeleteItem(item.id)}
//           />
//         ))}
//         <button type="button" onClick={handleAddItem}>
//           + Add New {itemLabel}
//         </button>
//       </div>
//       <button type="submit">
//         {isEditMode ? "Save Changes" : "Create New"}
//       </button>
//     </form>
//   );
// };

// export default GenericForm;
