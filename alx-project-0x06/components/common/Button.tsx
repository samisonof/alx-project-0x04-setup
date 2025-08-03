// components/common/Button.tsx
import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue" | "gray"; // define accepted color values
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "gray",
  onClick,
}) => {
  const bgColor =
    buttonBackgroundColor === "red"
      ? "bg-red-500 hover:bg-red-600"
      : buttonBackgroundColor === "blue"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded ${bgColor}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
