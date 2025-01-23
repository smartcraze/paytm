interface InputFieldProps {
  label: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  ref?: any;
}

function InputField({
  label,
  type,
  onChange,
  placeholder,
  value,
  ref,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-gray-200"
      />
    </div>
  );
}

export default InputField;
