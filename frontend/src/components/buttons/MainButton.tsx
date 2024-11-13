import React from "react";
import PropTypes from "prop-types";

// Definere gjenbrukbare typer for styling
type ButtonVariant = "primary" | "secondary" | "danger";

// Utility funksjon for conditional classes
const getButtonClasses = (variant: ButtonVariant): string => {
  const baseClasses = "px-4 py-2 rounded-md";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return `${baseClasses} ${variantClasses[variant]}`;
};

// Bruk i komponenter
const Button: React.FC<{
  variant: ButtonVariant;
  children: React.ReactNode;
}> = ({ variant, children }) => (
  <button className={getButtonClasses(variant)}>{children}</button>
);

// Add propTypes for validation
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"])
    .isRequired as PropTypes.Validator<ButtonVariant>,
  children: PropTypes.node.isRequired,
};

export default Button;
