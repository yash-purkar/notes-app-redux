const initialState = {
  notesData: [],
  editNoteId: null
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE": return {
      ...state,
      notesData: [...state.notesData, action.payload]
    }

    case "DELETE_NOTE": {
      return {
        ...state,
        notesData: state?.notesData?.filter(data => data?.id !== action.payload)
      }
    }

    case "SET_EDIT_NOTE_ID": return {
      ...state, editNoteId: action.payload
    }

    case "NOTE_OPERATIONS": return {
      ...state, notesData: action.payload,
      editNoteId: null
    }

    default: return state;
  }
}