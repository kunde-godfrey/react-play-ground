import styles from "./Button.module.css";

interface Props {
  label: string;
  color: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ label, color = "primary", onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
