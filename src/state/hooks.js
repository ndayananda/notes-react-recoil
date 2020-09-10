import { useRecoilCallback, useRecoilState } from "recoil"
import { notesAtom, noteAtom } from "./atoms";

export const useAddNote = () => {
  const [notes, setNotes] = useRecoilState(notesAtom);

  return useRecoilCallback(({set}) => {
    return (newNote) => {
      setNotes(oldNotes => [...oldNotes, newNote.id]);
      set(noteAtom(newNote.id), newNote);
    }
  }, [notes]);
} 