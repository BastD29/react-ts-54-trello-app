// type FormDataType = {
//   [key: string]: string;
// };

// type FormDataType = {
//   [key: string]: string | [];
// };

// type FormDataType = {
//   [key: string]: any;
// };

// type FormDataType<T = any> = {
//   [key: string]: string | T[];
// };

// export type { FormDataType };

// type Item = {
//   id: string;
//   name: string;
//   [key: string]: any; // Allows for additional properties on the item
// };

// type FormDataType = {
//   [key: string]: any; // Supports any form structure
//   items: Item[]; // Example list, could be columns, tasks, etc.
// };

// type GenericFormProps = {
//   entityId?: string; // Undefined for create mode
//   entityType: "board" | "task";
//   initialValues: FormDataType;
//   onSubmit: (formData: FormDataType) => void;
//   itemLabel?: string; // Label for the items (e.g., "Column", "Task")
// };

// export type { Item, FormDataType, GenericFormProps };
