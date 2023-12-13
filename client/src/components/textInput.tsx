import React, { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  ...inputProps
}) => {
  return (
    <div className="w-full flex flex-col mt-2">
      <label htmlFor={inputProps.id} className="text-ascent-2 text-sm mb-2">
        {label}
      </label>
      <input
        {...inputProps}
        className="w-full rounded-md bg-secondary border-none outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666]"
      />
      {error && <div className="text-lightRed text-sm mt-1">{error}</div>}
    </div>
  );
};

export default TextInput;
