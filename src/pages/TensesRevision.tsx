import { Button } from "@/components/Button";
import { TensesList } from "@/components/TensesList";
import type { TenseProps } from "@/interfaces/TenseProps";

const tesnsesRev: TenseProps[] = [
  {
    title: "Present Simple",
    description: "Present Simple Desc",
    form: {
      regular: "infinitive (he/she/it) + -s",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test1",
      exampleInterrigatve: "test1",
      exampleNegative: "test1",
    },
  },
  {
    title: "Present Continous",
    description: "Present Continous Desc",
    form: {
      regular: "to be (am/are/is) + infinitive + -ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Past Simple",
    description: "Past Simple Desc",
    form: {
      regular: "infinitive + -ed",
      irregular: "2nd column of table of irregular verbs",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Past Continous",
    description: "Past Continous Desc",
    form: {
      regular: "was/were + infinitive + -ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Present Perfect",
    description: "Present Perfect Desc",
    form: {
      regular: "have/has + past participle*",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Present Perfect Continuous",
    description: "Present Perfect Desc",
    form: {
      regular: "have/has + been + infinitive + -ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Past Perfect (Simple)",
    description: "Present Perfect Desc",
    form: {
      regular: "had + past participle* ",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Past Perfect Continuous",
    description: "Present Perfect Desc",
    form: {
      regular: "had + been + infinitive + ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Will - future",
    description: "will + infinitive",
    form: {
      regular: "will + infinitive",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Going to - future",
    description: "Going to - future",
    form: {
      regular: "to be (am/are/is) + going to + infinitive",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Future Continuous",
    description: "will + be + infinitive + ing",
    form: {
      regular: "will + be + infinitive + ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Future Perfect Simple",
    description: "will + have + past participle*",
    form: {
      regular: "will + have + past participle*",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Future Perfect Continuous",
    description: "will + have + past participle*",
    form: {
      regular: "will + have + been + infinitive + ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Conditional Simple",
    description: "",
    form: {
      regular: "would + infinitive",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Conditional Continuous",
    description: "",
    form: {
      regular: "would + be + infinitive + ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Conditional Perfect",
    description: "",
    form: {
      regular: "would + have + past participle*",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },

  {
    title: "Conditional Perfect Continuous",
    description: "",
    form: {
      regular: "would + have + been + infinitive + ing",
      irregular: "",
    },
    example: {
      exampleAffirmative: "test2",
      exampleInterrigatve: "test2",
      exampleNegative: "test2",
    },
  },
];

export const TensesRevision = () => {
  return (
    <>
      <div className="px-6 pt-6">
        <Button
          value="← Powrót"
          href="/"
          styles="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
        />
      </div>

      <div className="w-screen flex flex-col items-center mt-16 px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-xl">
          <h1>Tenses Revision</h1>
        </div>

        <div className="grid grid-cols-1 w-full">
          <TensesList tensesList={tesnsesRev} />
        </div>
      </div>
    </>
  );
};
