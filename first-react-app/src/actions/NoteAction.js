export const NoteActionTypes = {
    UPDATE_NOTE_TITLE: 'UPDATE_NOTE_TITLE',
    UPDATE_NOTE_BODY: 'UPDATE_NOTE_BODY'
  }
  
  export const updateNoteTitle = (newTitle) => {
    return {
      type: NoteActionTypes.UPDATE_NOTE_TITLE,
      title: newTitle
    }
  }
  
  export const updateNoteBody = (newBody) => {
    return {
      type: NoteActionTypes.UPDATE_NOTE_BODY,
      body: newBody
    }
  }