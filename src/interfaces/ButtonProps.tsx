export interface ButtonProps {
  value: string,
  href?: string,
  styles: string,
  isDisabled?: boolean,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
}
