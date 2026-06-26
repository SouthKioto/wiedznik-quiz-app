import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Link } from "react-router";

export const Button = ({ value, href, styles, under }: ButtonProps) => {
  return (
    <>
      <Link to={href}>
        <button className={`${styles} ${under ? "block" : ""}`}>
          {value}
        </button>
      </Link>
    </>
  );
};

