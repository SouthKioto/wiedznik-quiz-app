export interface TenseForm {
  regular: string;
  irregular: string;
}
export interface ExampleProps {
  exampleAffirmative: string;
  exampleNegative: string;
  exampleInterrigatve: string;
}

export interface TenseProps {
  title: string;
  description: string;
  example: ExampleProps;
  form: TenseForm;
}
