import { atom } from 'recoil';

export const notesAtom = atom({
  key: 'notes',
  default: [{
    id: 101,
    title: 'First Note',
    description: 'First note description'
  }, {
    id: 102,
    title: 'Second Note',
    description: 'Second note description'
  }]
});