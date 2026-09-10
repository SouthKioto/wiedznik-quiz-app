export interface TenseForm {
  affirmative: string;
  negative: string;
  interrogative: string;
  irregular?: string;
}
export interface ExampleProps {
  exampleAffirmative: string;
  exampleNegative: string;
  exampleInterrigatve: string;
}

export interface TenseProps {
  title: string;
  description: string;
  usage: string[];
  example: ExampleProps;
  form: TenseForm;
}
