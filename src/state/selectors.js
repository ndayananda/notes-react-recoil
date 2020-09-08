import { selectorFamily } from 'recoil';
import { notesAtom } from './atoms';

export const getNotesById = selectorFamily({
  key: 'getNotesById',
  get: id => ({get}) => {
    const notes = get(notesAtom);
    return notes.find(note => note.id === id);
  }
});