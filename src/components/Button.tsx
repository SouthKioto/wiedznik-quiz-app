import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Link, useNavigate } from "react-router";

export const Button = ({ value, href, styles, onClick, isDisabled }: ButtonProps) => {
  const navigate = useNavigate();
  const resolveHref: string | undefined = isDisabled ? "" : href;

  const handleResolveHyprlink = (link: string | undefined) => {
    if (!link || link.length == 0 || link == undefined) {
      return;
    } else {
      navigate(link);
    }
  }

  return (
    <>
      <button className={styles} onClick={(e) => {
        onClick?.(e);
        handleResolveHyprlink(resolveHref);
      }}
        disabled={isDisabled}>
        {value}
      </button>
    </>
  );
};

