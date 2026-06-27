import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Link } from "react-router";

export const Button = ({ value, href, styles, onClick, isDisabled }: ButtonProps) => {
  const resolveHref = isDisabled ? "" : href;

  return (
    <>
      <Link to={resolveHref}>
        <button className={styles} onClick={onClick} disabled={isDisabled}>
          {value}
        </button>
      </Link >
    </>
  );
};

