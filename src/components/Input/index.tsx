import React from "react";

// import { Container } from './styles';

type Props = {
  name: string;
  type: string;
  placeholder: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
