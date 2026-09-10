import { Button } from "@/components/Button";
import { TenseContentViewer } from "@/components/TenseContentViewer";
import { TensesList } from "@/components/TensesList";
import { TensesListOnlyTitles } from "@/components/TensesListOnlyTitles";
import type { TenseProps } from "@/interfaces/TenseProps";
import { useState } from "react";

const tensesRev: TenseProps[] = [
  {
    title: "Present Simple",
    description:
      "Podstawowy czas teraźniejszy. Używamy go głównie do mówienia o tym, co dzieje się regularnie, oraz o faktach i stanach.",
    usage: [
      "Rutyny, zwyczaje i czynności, które regularnie się powtarzają",
      "Fakty i rzeczy, które są ogólnie prawdziwe",
      "Stany, opinie, uczucia i posiadanie",
      "Rozkłady jazdy, harmonogramy i wydarzenia odbywające się w przyszłości",
    ],
    form: {
      affirmative: "I/you/we/they + base verb\nHe/she/it + verb + -s/-es",
      negative:
        "I/you/we/they + do not (don't) + base verb\nHe/she/it + does not (doesn't) + base verb",
      interrogative:
        "Do + I/you/we/they + base verb?\nDoes + he/she/it + base verb?",
    },
    example: {
      exampleAffirmative: "I work every day.",
      exampleNegative: "I don't work every day.",
      exampleInterrigatve: "Do I work every day?",
    },
  },

  {
    title: "Present Continuous",
    description:
      "Czas teraźniejszy ciągły. Używamy go głównie do mówienia o czynnościach, które dzieją się teraz lub są tymczasowe.",
    usage: [
      "Czynności, które dzieją się w chwili mówienia",
      "Sytuacje tymczasowe",
      "Zmiany i procesy zachodzące obecnie",
      "Ustalone plany na bliską przyszłość",
    ],
    form: {
      affirmative: "Subject + am/is/are + verb + -ing",
      negative: "Subject + am/is/are + not + verb + -ing",
      interrogative: "Am/Is/Are + subject + verb + -ing?",
    },
    example: {
      exampleAffirmative: "I'm working now.",
      exampleNegative: "I'm not working now.",
      exampleInterrigatve: "Am I working now?",
    },
  },

  {
    title: "Past Simple",
    description:
      "Podstawowy czas przeszły. Używamy go do mówienia o zakończonych wydarzeniach, które miały miejsce w przeszłości.",
    usage: [
      "Zakończone czynności w przeszłości",
      "Wydarzenia, które nastąpiły po sobie",
      "Opowiadanie historii i wydarzeń z przeszłości",
      "Wydarzenia z określonym momentem w przeszłości, np. yesterday, last week, two years ago",
    ],
    form: {
      affirmative:
        "Subject + verb + -ed\nDla czasowników nieregularnych: Subject + 2nd form",
      negative: "Subject + did not (didn't) + base verb",
      interrogative: "Did + subject + base verb?",
      irregular: "2nd form of the verb / 2nd column of irregular verbs",
    },
    example: {
      exampleAffirmative: "I worked yesterday.",
      exampleNegative: "I didn't work yesterday.",
      exampleInterrigatve: "Did I work yesterday?",
    },
  },

  {
    title: "Past Continuous",
    description:
      "Czas przeszły ciągły. Używamy go do opisywania czynności, która trwała w określonym momencie w przeszłości.",
    usage: [
      "Czynność trwająca w konkretnym momencie w przeszłości",
      "Czynność będąca w trakcie, gdy wydarzyło się coś innego",
      "Dwie czynności trwające jednocześnie w przeszłości",
      "Tworzenie tła dla wydarzeń w opowiadaniu",
    ],
    form: {
      affirmative: "Subject + was/were + verb + -ing",
      negative: "Subject + was/were + not + verb + -ing",
      interrogative: "Was/Were + subject + verb + -ing?",
    },
    example: {
      exampleAffirmative: "I was working at 5 p.m.",
      exampleNegative: "I wasn't working at 5 p.m.",
      exampleInterrigatve: "Was I working at 5 p.m.?",
    },
  },

  {
    title: "Present Perfect",
    description:
      "Czas łączący przeszłość z teraźniejszością. Używamy go, gdy przeszłe wydarzenie ma znaczenie lub skutek w teraźniejszości.",
    usage: [
      "Doświadczenia życiowe bez podawania konkretnego momentu w przeszłości",
      "Czynności, które zakończyły się niedawno i mają skutek w teraźniejszości",
      "Sytuacje, które rozpoczęły się w przeszłości i nadal trwają",
      "Wydarzenia, które miały miejsce w okresie trwającym do chwili obecnej",
    ],
    form: {
      affirmative: "Subject + have/has + past participle (3rd form)",
      negative: "Subject + have/has + not + past participle (3rd form)",
      interrogative: "Have/Has + subject + past participle (3rd form)?",
      irregular:
        "Past participle / 3rd form of the verb / 3rd column of irregular verbs",
    },
    example: {
      exampleAffirmative: "I have worked here for five years.",
      exampleNegative: "I haven't worked here for five years.",
      exampleInterrigatve: "Have I worked here for five years?",
    },
  },

  {
    title: "Present Perfect Continuous",
    description:
      "Czas używany do podkreślania trwania czynności, która rozpoczęła się w przeszłości i trwa do teraz lub właśnie się zakończyła.",
    usage: [
      "Podkreślanie, jak długo trwa czynność",
      "Czynność rozpoczęta w przeszłości i nadal trwająca",
      "Niedawno zakończona czynność, której skutki są widoczne teraz",
      "Często używany z for i since",
    ],
    form: {
      affirmative: "Subject + have/has + been + verb + -ing",
      negative: "Subject + have/has + not + been + verb + -ing",
      interrogative: "Have/Has + subject + been + verb + -ing?",
    },
    example: {
      exampleAffirmative: "I have been working for five hours.",
      exampleNegative: "I haven't been working for five hours.",
      exampleInterrigatve: "Have I been working for five hours?",
    },
  },

  {
    title: "Past Perfect",
    description:
      "Czas używany do pokazania, że jedna czynność wydarzyła się wcześniej niż inna czynność w przeszłości.",
    usage: [
      "Czynność, która wydarzyła się przed inną czynnością w przeszłości",
      "Pokazywanie kolejności wydarzeń w przeszłości",
      "Podkreślanie, że coś było już zakończone przed określonym momentem w przeszłości",
    ],
    form: {
      affirmative: "Subject + had + past participle (3rd form)",
      negative: "Subject + had not (hadn't) + past participle (3rd form)",
      interrogative: "Had + subject + past participle (3rd form)?",
      irregular:
        "Past participle / 3rd form of the verb / 3rd column of irregular verbs",
    },
    example: {
      exampleAffirmative: "I had worked there before I moved to London.",
      exampleNegative: "I hadn't worked there before I moved to London.",
      exampleInterrigatve: "Had I worked there before I moved to London?",
    },
  },

  {
    title: "Past Perfect Continuous",
    description:
      "Czas używany do podkreślania długości trwania czynności, która trwała przed innym wydarzeniem w przeszłości.",
    usage: [
      "Podkreślanie, jak długo czynność trwała przed innym wydarzeniem w przeszłości",
      "Czynność trwająca przez pewien czas przed inną czynnością w przeszłości",
      "Wyjaśnianie przyczyny lub skutku widocznego w określonym momencie w przeszłości",
    ],
    form: {
      affirmative: "Subject + had + been + verb + -ing",
      negative: "Subject + had + not + been + verb + -ing",
      interrogative: "Had + subject + been + verb + -ing?",
    },
    example: {
      exampleAffirmative:
        "I had been working for five hours before I went home.",
      exampleNegative:
        "I hadn't been working for five hours before I went home.",
      exampleInterrigatve:
        "Had I been working for five hours before I went home?",
    },
  },

  {
    title: "Future Simple (will)",
    description:
      "Konstrukcja z will używana między innymi do spontanicznych decyzji, przewidywań, obietnic i ofert.",
    usage: [
      "Decyzje podejmowane w chwili mówienia",
      "Przewidywania dotyczące przyszłości",
      "Obietnice i oferty",
      "Prośby i pytania dotyczące przyszłości",
    ],
    form: {
      affirmative: "Subject + will + base verb",
      negative: "Subject + will not (won't) + base verb",
      interrogative: "Will + subject + base verb?",
    },
    example: {
      exampleAffirmative: "I will help you.",
      exampleNegative: "I won't help you.",
      exampleInterrigatve: "Will I help you?",
    },
  },

  {
    title: "Going to - Future",
    description:
      "Konstrukcja używana głównie do mówienia o planach i zamiarach oraz o przewidywaniach opartych na widocznych oznakach.",
    usage: [
      "Plany i zamiary dotyczące przyszłości",
      "Decyzje podjęte przed momentem mówienia",
      "Przewidywania oparte na tym, co widzimy lub wiemy teraz",
    ],
    form: {
      affirmative: "Subject + am/is/are + going to + base verb",
      negative: "Subject + am/is/are + not + going to + base verb",
      interrogative: "Am/Is/Are + subject + going to + base verb?",
    },
    example: {
      exampleAffirmative: "I'm going to study tonight.",
      exampleNegative: "I'm not going to study tonight.",
      exampleInterrigatve: "Am I going to study tonight?",
    },
  },

  {
    title: "Future Continuous",
    description:
      "Czas używany do mówienia o czynności, która będzie trwała w określonym momencie w przyszłości.",
    usage: [
      "Czynność, która będzie trwała w konkretnym momencie w przyszłości",
      "Czynność będąca częścią normalnego przebiegu przyszłych wydarzeń",
      "Pytania o czyjeś plany w neutralny lub uprzejmy sposób",
    ],
    form: {
      affirmative: "Subject + will + be + verb + -ing",
      negative: "Subject + will + not + be + verb + -ing",
      interrogative: "Will + subject + be + verb + -ing?",
    },
    example: {
      exampleAffirmative: "I will be working at 5 p.m.",
      exampleNegative: "I won't be working at 5 p.m.",
      exampleInterrigatve: "Will I be working at 5 p.m.?",
    },
  },

  {
    title: "Future Perfect Simple",
    description:
      "Czas używany do mówienia o czynności, która będzie zakończona przed określonym momentem w przyszłości.",
    usage: [
      "Czynność, która zakończy się przed określonym momentem w przyszłości",
      "Podkreślanie, że coś będzie już ukończone w przyszłości",
      "Często używany z by tomorrow, by next week, by 2030 itp.",
    ],
    form: {
      affirmative: "Subject + will + have + past participle (3rd form)",
      negative: "Subject + will + not + have + past participle (3rd form)",
      interrogative: "Will + subject + have + past participle (3rd form)?",
      irregular:
        "Past participle / 3rd form of the verb / 3rd column of irregular verbs",
    },
    example: {
      exampleAffirmative: "I will have finished the work by Friday.",
      exampleNegative: "I won't have finished the work by Friday.",
      exampleInterrigatve: "Will I have finished the work by Friday?",
    },
  },

  {
    title: "Future Perfect Continuous",
    description:
      "Czas używany do podkreślania, jak długo czynność będzie trwała do określonego momentu w przyszłości.",
    usage: [
      "Podkreślanie długości trwania czynności do określonego momentu w przyszłości",
      "Czynność, która będzie trwała przez pewien czas przed określonym momentem w przyszłości",
      "Często używany z for i by",
    ],
    form: {
      affirmative: "Subject + will + have + been + verb + -ing",
      negative: "Subject + will + not + have + been + verb + -ing",
      interrogative: "Will + subject + have + been + verb + -ing?",
    },
    example: {
      exampleAffirmative:
        "By Friday, I will have been working here for five years.",
      exampleNegative:
        "By Friday, I won't have been working here for five years.",
      exampleInterrigatve:
        "Will I have been working here for five years by Friday?",
    },
  },

  {
    title: "Conditional Simple",
    description:
      "Konstrukcja używana do mówienia o sytuacjach hipotetycznych, wyobrażonych lub zależnych od określonego warunku.",
    usage: [
      "Hipotetyczne sytuacje w teraźniejszości lub przyszłości",
      "Mówienie o tym, co zrobilibyśmy w określonych warunkach",
      "Udzielanie porad i wyrażanie preferencji",
      "Uprzejme prośby",
    ],
    form: {
      affirmative: "Subject + would + base verb",
      negative: "Subject + would not (wouldn't) + base verb",
      interrogative: "Would + subject + base verb?",
    },
    example: {
      exampleAffirmative: "I would work less if I could.",
      exampleNegative: "I wouldn't work less if I could.",
      exampleInterrigatve: "Would I work less if I could?",
    },
  },

  {
    title: "Conditional Continuous",
    description:
      "Konstrukcja używana do mówienia o czynności, która trwałaby w hipotetycznej sytuacji.",
    usage: [
      "Czynność, która trwałaby w określonych warunkach",
      "Hipotetyczne sytuacje będące w trakcie",
      "Podkreślanie trwania hipotetycznej czynności",
    ],
    form: {
      affirmative: "Subject + would + be + verb + -ing",
      negative: "Subject + would + not + be + verb + -ing",
      interrogative: "Would + subject + be + verb + -ing?",
    },
    example: {
      exampleAffirmative: "I would be working if I weren't on holiday.",
      exampleNegative: "I wouldn't be working if I weren't on holiday.",
      exampleInterrigatve: "Would I be working if I weren't on holiday?",
    },
  },

  {
    title: "Conditional Perfect",
    description:
      "Konstrukcja używana do mówienia o tym, co wydarzyłoby się w przeszłości, gdyby spełniony został określony warunek.",
    usage: [
      "Hipotetyczne wydarzenia w przeszłości",
      "Sytuacje, które się nie wydarzyły, ale mogły się wydarzyć",
      "Wyrażanie żalu lub rozważanie alternatywnego przebiegu wydarzeń",
    ],
    form: {
      affirmative: "Subject + would + have + past participle (3rd form)",
      negative: "Subject + would + not + have + past participle (3rd form)",
      interrogative: "Would + subject + have + past participle (3rd form)?",
      irregular:
        "Past participle / 3rd form of the verb / 3rd column of irregular verbs",
    },
    example: {
      exampleAffirmative: "I would have worked harder if I had known.",
      exampleNegative: "I wouldn't have worked harder if I had known.",
      exampleInterrigatve: "Would I have worked harder if I had known?",
    },
  },

  {
    title: "Conditional Perfect Continuous",
    description:
      "Konstrukcja używana do podkreślania, jak długo trwałaby hipotetyczna czynność w przeszłości.",
    usage: [
      "Długość trwania hipotetycznej czynności w przeszłości",
      "Rozważanie, jak długo coś trwałoby, gdyby spełniony został określony warunek",
      "Alternatywny przebieg wydarzeń w przeszłości",
    ],
    form: {
      affirmative: "Subject + would + have + been + verb + -ing",
      negative: "Subject + would + not + have + been + verb + -ing",
      interrogative: "Would + subject + have + been + verb + -ing?",
    },
    example: {
      exampleAffirmative:
        "I would have been working there for five years if I hadn't moved.",
      exampleNegative:
        "I wouldn't have been working there for five years if I hadn't moved.",
      exampleInterrigatve:
        "Would I have been working there for five years if I hadn't moved?",
    },
  },
];

export const TensesRevision = () => {
  const [openContent, setOpenContent] = useState<TenseProps>(tensesRev[0]);

  const handleShowSelectedTenseReview = (title: string) => {
    let selected = tensesRev.find((element) => {
      if (element.title === title) return element;
    });

    if (selected !== undefined) setOpenContent(selected);
  };

  return (
    <>
      <div className="px-6 pt-6">
        <Button
          value="← Powrót"
          href="/"
          styles="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
        />
      </div>

      <div className="w-full min-h-screen flex flex-col md:flex-row gap-4 px-4 pb-6 md:px-6">
        <div className="w-full md:w-[30%] md:max-h-[85vh] flex flex-col items-stretch">
          <div className="grid grid-cols-1 gap-2 overflow-x-hidden md:overflow-y-auto pb-2 md:pb-0 text-sm sm:text-base">
            <TensesListOnlyTitles
              tensesList={tensesRev}
              onClick={(e) =>
                handleShowSelectedTenseReview(e.target.textContent)
              }
            />
          </div>
        </div>

        <div className="w-full md:w-[68%]">
          <div className="bg-white/50 border border-white rounded p-4 md:p-6">
            <TenseContentViewer content={openContent} />
          </div>
        </div>
      </div>
    </>
  );
};
