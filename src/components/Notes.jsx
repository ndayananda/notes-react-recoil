import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { notesAtom } from './../state/atoms';
import { useAddNote } from './../state/hooks';
import Note from './Note';

function Notes(props) {
  const notes = useRecoilValue(notesAtom);
  const addNote = useAddNote();

  useEffect(() => {
    //TODO, fetch from API
    const initialNotes = [{
      id: 101,
      title: 'First Note',
      description: 'First note description',
      isFavorite: false
    }, {
      id: 102,
      title: 'Second Note',
      description: 'Second note description',
      isFavorite: false
    }];
    initialNotes.map(note => addNote(note));
    // eslint-disable-next-line 
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">My Notes</h1>
        <div className="posts">
          {notes.map(id => {
            return(
              <Note id={id} key={id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Notes;