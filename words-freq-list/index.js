
import { readFile } from 'node:fs/promises';

(async () => {
  const filePath = process.argv[2];
  const targetWord = process.argv[3]?.toLowerCase();

  if (!filePath) {
    console.error("Please provide a file name.");
    process.exit(1);
  }

  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const wordsArray = fileContent.split(/\W+/).filter((w) => w);
    const wordCounts = {};

    wordsArray.forEach((word) => {
      const lowerCaseWord = word.toLowerCase();

      if (targetWord) {
        if (lowerCaseWord === targetWord) {
          wordCounts[targetWord] = (wordCounts[targetWord] || 0) + 1;
        }
      } else {
        wordCounts[lowerCaseWord] = (wordCounts[lowerCaseWord] || 0) + 1;
      }
    });

    console.log(wordCounts);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
})();