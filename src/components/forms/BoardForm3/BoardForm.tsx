import React, { FC, useState } from "react";

type FormDataType = {
  name: string;
  columns?: ColumnType[];
};

type ColumnType = {
  id: number;
  name: string;
};

const initialValues: FormDataType = {
  name: "",
  columns: [],
};

const BoardForm: FC = () => {
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleColumnChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedColumns = formData.columns?.map((column, i) => {
      if (i === index) {
        return { ...column, name: e.target.value };
      }
      return column;
    });

    setFormData({ ...formData, columns: updatedColumns });
  };

  const handleAddColumn = () => {
    const newColumn: ColumnType = { id: Date.now(), name: "" }; // Using Date.now() for simplicity
    setFormData({
      ...formData,
      columns: [...(formData.columns || []), newColumn],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Submit formData here (e.g., to an API)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={handleNameChange}
        placeholder="Form Name"
      />
      {formData.columns?.map((column, index) => (
        <input
          key={column.id}
          type="text"
          value={column.name}
          onChange={(e) => handleColumnChange(index, e)}
          placeholder={`Column #${index + 1} Name`}
        />
      ))}
      <button type="button" onClick={handleAddColumn}>
        Add Column
      </button>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default BoardForm;
