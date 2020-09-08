import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { notesAtom } from './../state/atoms';

function Notes(props) {
  const [notes, setNotes] = useRecoilState(notesAtom);
  
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">My Notes</h1>
        <div className="posts">
          {notes.map(({id, title, description}) => {
            return(
              <div className="box" key={id}>
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="title">{title}</div>
                      <div className="description">{description}</div>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <Link to={`/update/${id}`} className="level-item">Edit</Link>
                        <button className="button level-item" aria-label="delete" onClick={e => deleteNote(id)}>Delete</button>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Notes;