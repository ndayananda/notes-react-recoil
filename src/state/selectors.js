import { selector } from 'recoil';
import { notesAtom, noteAtom } from './atoms';

export const getFavoritesCount = selector({
  key: 'getFavoritesCount',
  get: ({get}) => {
    const noteIds = get(notesAtom);
    return noteIds.filter(id => {
      const note = get(noteAtom(id));
      return note.isFavorite;
    }).length
  }
});