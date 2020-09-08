import React from 'react';
import NoteForm from './NoteForm';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.props.addNote(note);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Create Note</h1>
          <div className="columns is-mobile">
            <div className="column is-three-fifths">
            <NoteForm updateNote={this.addNote} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateNote;