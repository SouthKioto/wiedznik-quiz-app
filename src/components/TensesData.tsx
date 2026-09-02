import type { TenseProps } from "@/interfaces/TenseProps";

export const TenseData = ({ value, styles }: TenseProps) => {
  return (
    <>
      <h1>Tense Data</h1>

      <div>
        <div>
          <h1>{value}</h1>
        </div>
      </div>
    </>
  );
};
