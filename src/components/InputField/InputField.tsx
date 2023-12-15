import { ComponentProps } from "react";

interface InputFieldProps extends ComponentProps<"input"> {
  label: string;
}

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <label className="flex flex-col">
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </span>
      <input {...props} />
    </label>
  );
}
