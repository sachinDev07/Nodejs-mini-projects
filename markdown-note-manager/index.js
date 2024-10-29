#!/usr/bin/env node

import { addNote, readNote, listNotes } from './fileOperations.js';

const [, , command, title, ...contentParts] = process.argv;

const content = contentParts.join(' ');

switch (command) {
  case 'list':
    listNotes();
    break;
  case 'add':
    if (!title || !content) {
      console.log('Usage: markdown-note-manager add <title> <content>');
    } else {
      addNote(title, content);
    }
    break;
  case 'read':
    if (title) readNote(title);
    else console.log('Please provide a title of the note to read.');
    break;
  default:
    console.log('Usage: markdown-note-manager <command> <args>');
    console.log('Commands:');
    console.log('  list                   List all notes');
    console.log('  add <title> <content>  Add a new note');
    console.log('  read <title>           Read a note');
}
