import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  colors?: string;
}

export const Button = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  colors
}: ButtonProps) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`cursor-pointer text-neutral-100 w-10 flex justify-center mx-auto ${colors}`}
    >
      {children}
    </button>
  );
};
