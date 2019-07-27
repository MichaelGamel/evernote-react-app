import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

const SidebarItemComponent = ({
  _index,
  _note,
  classes,
  selectedNoteIndex,
  selectNote,
  deleteNote
}) => {
  const deleteSelectedNote = note => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      deleteNote(note);
    }
  };

  return (
    <div key={_index}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === _index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => selectNote(_note, _index)}
        >
          <ListItemText
            primary={_note.title}
            secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}
          />
        </div>
        <DeleteIcon
          onClick={() => deleteSelectedNote(_note)}
          className={classes.deleteIcon}
        />
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(SidebarItemComponent);
