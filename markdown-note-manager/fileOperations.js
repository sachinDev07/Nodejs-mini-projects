import { writeFile, readFile, readdir } from 'node:fs/promises';
import { join } from 'path';

const NOTES_DIR = join(process.cwd(), 'notes');

export async function addNote(title, content) {
  console.log(content);
  const filePath = join(NOTES_DIR, `${title}.md`);
  const defaultContent = `# ${title}\n\n${content}`;

  try {
    await writeFile(filePath, defaultContent, 'utf-8');
    console.log(`Note "${title}" created.`);
  } catch (error) {
    console.error('Error creating note: ', error);
  }
}

export async function readNote(title) {
  const filePath = join(NOTES_DIR, `${title}.md`);

  try {
    const content = await readFile(filePath, 'utf-8');
    console.log(`\n${content}`);
  } catch (error) {
    console.error(`Note "${title}" not found.`);
  }
}

export async function listNotes() {
  try {
    const files = await readdir(NOTES_DIR);
    if(files.length === 0 ) {
      console.log('Notes are not present.');
      return;
    }
    console.log('Your notes: ');
    files.forEach((file) => console.log(`- ${file.replace('.md', '')}`));
  } catch (error) {
    console.error('Could not list notes: ', error);
  }
}
