import { v4 as uuid } from 'uuid';

export const addNewNote = ({ title, note }) => {
  return {
    type: "ADD_NEW_NOTE",
    payload: {
      id: uuid(),
      title,
      note
    }
  }
}

export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id
  }
}