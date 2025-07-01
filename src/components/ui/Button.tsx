import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  key: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Button = ({
  children,
  onClick,
  key,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={key}
      onClick={onClick}
      className={`cursor-pointer text-neutral-100 rounded-lg w-10 flex justify-center mx-auto`}
    >
      {children}
    </button>
  );
};
