export interface ButtonProps {
  value: string,
  icon?: React.ReactNode,
  ariaLabel?: string,
  href?: string,
  styles: string,
  isDisabled?: boolean,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
}
