import { atom, atomFamily } from 'recoil';

export const notesAtom = atom({
  key: 'notes',
  default: []
});

export const noteAtom = atomFamily({
  key: 'note',
  default: {}
})