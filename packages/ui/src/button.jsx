import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ label, variant, onClick }) => (
  <BootstrapButton variant={variant} onClick={onClick}>
    {label}
  </BootstrapButton>
);

export default Button;
