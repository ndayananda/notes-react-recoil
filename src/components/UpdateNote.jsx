import React from 'react';
import NoteForm from './NoteForm';
import { useParams } from 'react-router-dom';

function UpdateNote() {
  const { id } = useParams();
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Update Note</h1>
        <div className="columns is-mobile">
          <div className="column is-three-fifths">
            <NoteForm id={parseInt(id)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateNote;