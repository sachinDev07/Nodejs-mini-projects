# word-freq-list

**word-freq-list** is a Node.js command-line tool that helps you quickly analyze the word frequency in a text file. Designed with simplicity and efficiency in mind, `word-freq-list` can count the occurrences of each word or focus on a specific word of interest. This tool provides an example of Node.js file handling and string manipulation and is useful for anyone working with text analysis, data processing, or learning Node.js.

## Features

- **Count All Words**: Calculate the frequency of every unique word in a file.
- **Targeted Word Count**: Specify a word to get its count, ignoring all other words.
- **Case Insensitive**: Counts words in a case-insensitive manner to ensure accurate results.
- **Easy to Use**: Simple CLI tool that can be installed and run in seconds.

## Installation

To use `word-freq-list`, you have two options: using `npx` directly, or installing it globally.

### Option 1: Run with `npx`

```bash
npx word-freq-list <filename> [targetWord]
```

### Option 2: Install Globally
- Install it globally to use as a regular command:

```bash
npm install -g word-freq-list
```
- Then you can run:
```bash
word-freq-list <filename> [targetWord]
```

### Usage
- The command-line tool expects a file path and, optionally, a word to look for:
```bash
word-freq-list <filename> [targetWord]
```
- filename : (Required) Path to the text file you want to analyze.
- targetWord: (Optional) Specify a word to count its occurrences. If omitted, word-freq-list will display a frequency map of all words in the file.

### Examples
- Example 1: Count All Words
- Count all words in a text file called sample.txt:
```bash
npx word-freq-list sample.txt
```
- Output
```json
{
  "node": 3,
  "javascript": 5,
  "cli": 2,
  "tool": 4
}
```

- Example 2: Count a Specific Word
- To count how many times the word "javascript" appears in sample.txt:

```bash
npx word-freq-list sample.txt example
```

- Output
```json
{
  "example": 7
}
```

### How It Works
1. The tool reads the file provided in the arguments using Node.js’s fs/promises module.

2. It splits the text into words based on non-word characters, making it easy to handle punctuation.

3. If a targetWord is provided, it counts only that word (case insensitive). Otherwise, it returns a frequency count of each unique word in the file.

### Contributing
- Contributions are welcome! If you have ideas for improving this tool, feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License. See LICENSE for more information.

```css
Be sure to name the file `README.md` and place it in your project root folder for the formatting to be rendered correctly. GitHub and most Markdown editors should automatically recognize and display the formatting once it’s in a `.md` file.
```