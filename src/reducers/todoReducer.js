const initialState = {
  notesData: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE": return {
      ...state,
      notesData: [...state.notesData, action.payload]
    }

    default: return state;
  }
}