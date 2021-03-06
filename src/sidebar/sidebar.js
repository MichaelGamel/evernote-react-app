import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

const SidebarComponent = ({
  notes,
  classes,
  selectedNoteIndex,
  newNote,
  selectNote,
  deleteNote
}) => {
  const [title, setTitle] = useState(null);
  const [addingNote, setAddingNote] = useState(false);

  const newNoteBtnClick = () => {
    setTitle(null);
    setAddingNote(!addingNote);
  };
  const updateTitle = txt => {
    setTitle(txt);
  };
  const addNewNote = () => {
    newNote(title);
    setTitle(null);
    setAddingNote(false);
  };

  return notes ? (
    <div className={classes.sidebarContainer}>
      <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
        {addingNote ? 'Cancel' : 'New Note'}
      </Button>
      {addingNote ? (
        <div>
          <input
            type="text"
            className={classes.newNoteInput}
            placeholder="Enter note title"
            onKeyUp={e => updateTitle(e.target.value)}
          />
          <Button className={classes.newNoteSubmitBtn} onClick={addNewNote}>
            Submit Note
          </Button>
        </div>
      ) : null}
      <List>
        {notes.map((_note, _index) => {
          return (
            <div key={_index}>
              <SidebarItemComponent
                _note={_note}
                _index={_index}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={(n, i) => selectNote(n, i)}
                deleteNote={note => deleteNote(note)}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  ) : (
    <div></div>
  );
};

export default withStyles(styles)(SidebarComponent);
