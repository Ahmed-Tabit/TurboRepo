import { Button as BootstrapButton } from "react-bootstrap";

interface ButtonProps {
  label: string;
  variant: string;
  onClick: () => void;
}

export const Button = ({ label, variant, onClick }: ButtonProps) => (
  <BootstrapButton variant={variant} onClick={onClick}>
    {label}
  </BootstrapButton>
);