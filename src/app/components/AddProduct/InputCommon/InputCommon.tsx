import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  value: string | number;
  setProduct: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputCommon = ({ name, value, setProduct }: InputProps) => {
  return (
    <>
      <label className="capitalize">{name}</label>
      <input
        type="text"
        id={name}
        value={value}
        placeholder={name}
        onChange={(e) => setProduct(e)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};
