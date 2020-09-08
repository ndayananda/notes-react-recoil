import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getNotesById } from './../state/selectors';
import { notesAtom } from './../state/atoms';

function NoteForm(props) {
  const selectedNote = useRecoilValue(getNotesById(props.id)) || {id: Date.now()};
  const [note, setNote] = useState(selectedNote);
  const [notes, setNotes] = useRecoilState(notesAtom);

  const changeHandler = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };

  const cancelHandler = () => {
    props.history.push('/');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNotes(!props.id ? [...notes, note] : notes.map(n => n.id === note.id ? note : n));
    props.history.push('/');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" name="title" value={note.title} onChange={changeHandler} />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea" name="description" value={note.description} onChange={changeHandler}></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default withRouter(NoteForm);