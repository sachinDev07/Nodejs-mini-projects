# markdown-note-manager
**markdown-note-manager** is a Node.js command-line tool designed to help you manage markdown notes easily from the terminal. With this tool, you can add, list, and read notes saved as markdown files, making it a great solution for quick note-taking and practicing file management in Node.js.

## Features
- **Add Notes**: Create new markdown notes with a title and content.
- **List Notes**: View a list of all saved notes.
- **Read Notes**: Display the content of any note directly in the terminal.
- **Simple and Quick**: CLI tool that’s easy to install and start using.

## Installation
You can use markdown-note-manager directly with `npx`, or install it globally.

### Option 1: Run with `npx`

```bash
npx markdown-note-manager <command> [args]
```

### Option 2: Install Globally
- Install it globally to use as a regular command:

```bash
npm install -g markdown-note-manager
```

- Then you can run:

```bash
markdown-note-manager <command> [args]
```

### Usage

- Commands

- **Add a Note**: Creates a markdown file with the given title and content.
```bash
markdown-note-manager add "<title>" "<content>"
```

- **List Notes**: Lists all markdown notes in the notes folder.
```bash
markdown-note-manager list
```

- **Read a Note**: Displays the content of a specific note.
```bash
markdown-note-manager read "<title>"
```

### Arguments
- **title**: (Required) The title of the note, used as the filename.
- **content**: (Required for add command) The content of the note.

## Note: Ensure there is a folder named `notes` in your project’s root directory. This is where all notes will be saved. If the folder doesn’t exist, create it manually before running any commands.

### Examples

- Example 1: Add a New Note

```bash
npx markdown-note-manager add "MyFirstNote" "This is the content of my first note."
```

- Example 2: List All Notes

```bash
npx markdown-note-manager list
```

- Example 3: Read a Note

```bash
npx markdown-note-manager read "MyFirstNote"
```

### How It Works
1. The tool creates or reads files in a notes directory within your current working directory.
2. Each note is saved as a markdown file (.md), making it easy to read or edit with other markdown-compatible tools.
3. You’ll use Node.js’s fs/promises module for reading and writing files, giving you hands-on experience with asynchronous file handling.

### Contributing
- Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for improving this tool.

### License
This project is licensed under the MIT License. See LICENSE for more information.