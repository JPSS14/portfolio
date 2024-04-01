import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "success" | "error";
  variant?: "outlined";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  color,
  variant,
  fullWidth,
  ...props
}: ButtonProps) => {
  const isColor = color ? color : "primary";
  const buttonClassName = `${styles.button} ${styles[isColor]} ${
    variant && styles[variant]
  } ${fullWidth && styles.fullWidth}`;

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};
