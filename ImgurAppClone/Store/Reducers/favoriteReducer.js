const initialState = { favoritesFilm: ["mdr"] };

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
        nextState = {
            ...state,
            favoritesFilm: ["lol"]
        }
        return nextState
    default:
      return state
    }
  }

export default toggleFavorite;