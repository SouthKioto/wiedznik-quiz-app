import type { localStorageProps } from "@/interfaces/WordsProps";
import notoRegular from "../fonts/NotoSans-Regular.ttf";
import notoBold from "../fonts/NotoSans-Bold.ttf";

export type ExportFormat = "pdf" | "txt";

const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

// Ten sam format co przy imporcie (eng;pl;eng;pl;...), więc plik da się zaimportować z powrotem
const exportToTxt = (set: localStorageProps) => {
  const content = set.content.map((w) => `${w.eng};${w.pl}`).join(";");
  downloadBlob(new Blob([content], { type: "text/plain;charset=utf-8" }), `${set.name}.txt`);
};

const exportToPdf = async (set: localStorageProps) => {
  // ładowane dopiero przy eksporcie, żeby nie powiększać głównego bundla
  const { Document, Page, Text, View, StyleSheet, Font, pdf } = await import("@react-pdf/renderer");

  // domyślna Helvetica nie ma polskich znaków
  Font.register({
    family: "NotoSans",
    fonts: [
      { src: notoRegular, fontWeight: "normal" },
      { src: notoBold, fontWeight: "bold" },
    ],
  });

  const styles = StyleSheet.create({
    page: { padding: 40, fontFamily: "NotoSans", fontSize: 12, color: "#10363A" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
    subtitle: { fontSize: 11, color: "#4B6B6E", marginBottom: 20 },
    row: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#D5E3E0", paddingVertical: 6 },
    header: { fontWeight: "bold", borderBottomColor: "#10363A" },
    cell: { flex: 1 },
  });

  const doc = (
    <Document title={set.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{set.name}</Text>
        <Text style={styles.subtitle}>Wiedznik · {set.content.length} słówek</Text>
        <View style={[styles.row, styles.header]}>
          <Text style={styles.cell}>English</Text>
          <Text style={styles.cell}>Polski</Text>
        </View>
        {set.content.map((w, i) => (
          <View key={i} style={styles.row} wrap={false}>
            <Text style={styles.cell}>{w.eng}</Text>
            <Text style={styles.cell}>{w.pl}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  const blob = await pdf(doc).toBlob();
  downloadBlob(blob, `${set.name}.pdf`);
};

export const exportSet = (set: localStorageProps, format: ExportFormat) =>
  format === "pdf" ? exportToPdf(set) : Promise.resolve(exportToTxt(set));
