import { useReadme } from "@/contexts/readme/useReadme";

interface TextAreaProps {
  isReadOnly: boolean;
  currentValue: string;
  className: string;
}

export const TextArea = ({
  isReadOnly,
  currentValue,
  className,
}: TextAreaProps) => {
  const { handleChange } = useReadme();

  return (
    <textarea
      onChange={handleChange}
      value={currentValue}
      className={className}
      name=""
      id=""
      readOnly={isReadOnly}
    ></textarea>
  );
};
