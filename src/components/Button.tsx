import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Link } from "react-router";

export const Button = ({ value, href, styles, onClick, isDisabled }: ButtonProps) => {
  return (
    <>
      <Link to={href}>
        <button className={styles} onClick={onClick} disabled={isDisabled}>
          {value}
        </button>
      </Link>
    </>
  );
};

