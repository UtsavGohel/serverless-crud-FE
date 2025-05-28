import { useState, useEffect } from "react";
import type { User } from "../types/user";

interface Props {
  selectedUser?: User | null;
  onSubmit: (user: Omit<User, "userId">, id?: string) => void;
  onCancel: () => void;
}

const initialFormState: Omit<User, "userId"> = {
  name: "",
  email: "",
  age: "",
  phone: "",
  address: "",
};

const textFields: Array<keyof Omit<User, "userId" | "age">> = [
  "name",
  "email",
  "phone",
  "address",
];

const inputClass = "border p-2 rounded w-full";

export default function UserForm({ selectedUser, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<Omit<User, "userId">>(initialFormState);

  useEffect(() => {
    if (selectedUser) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { userId, ...rest } = selectedUser;
      setForm(rest);
    } else {
      setForm(initialFormState);
    }
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form, selectedUser?.userId);
    setForm(initialFormState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-white shadow mb-6"
    >
      <h2 className="text-xl mb-4">
        {selectedUser ? "Update User" : "Add User"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {textFields.map((field) => (
          <div key={field} className="flex flex-col">
            <label htmlFor={field} className="mb-1 font-semibold capitalize">
              {field}
            </label>
            <input
              id={field}
              type="text"
              name={field}
              placeholder={field}
              value={form[field]}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label htmlFor="age" className="mb-1 font-semibold">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {selectedUser ? "Update" : "Add"}
        </button>
        {selectedUser && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
