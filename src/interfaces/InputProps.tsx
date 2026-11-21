export interface InputProps {
  id?: string;
  value: string;
  placeholder?: string;
  type: string;
  styles: string;
  isDisabled?: boolean;
  onChange?: (e: any) => void;
}
