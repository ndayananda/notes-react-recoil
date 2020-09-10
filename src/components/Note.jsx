import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { noteAtom } from './../state/atoms';

function Note(props) {
  const [note, setNote] = useRecoilState(noteAtom(props.id));

  const deleteNote = (id) => {
    //setNotes(notes => notes.filter(note => note.id !== id));
  }

  const updateFavorite = (isFavorite) => {
    setNote(oldNote => ({...oldNote, isFavorite}));
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div className="title">{note.title}</div>
            <div className="description">{note.description}</div>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <label className="switch level-item" aria-label="Favorite">
                <input type="checkbox" {...(note.isFavorite && {checked: true})} onChange={e => updateFavorite(!note.isFavorite)} />
                <span className="slider round"></span>
              </label>
              <Link to={`/update/${note.id}`} className="button is-primary is-light level-item">Edit</Link>
              <button className="button is-danger is-light level-item" aria-label="delete" onClick={e => deleteNote(note.id)}>Delete</button>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

export default Note;