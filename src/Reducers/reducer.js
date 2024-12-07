export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV":
      const filterFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filterFavs };
    case "TOGGLE_THEME":
      if (action.payload == "light") {
        return {
          ...state,
          theme: "dark",
        };
      } else if (action.payload == "dark") {
        return {
          ...state,
          theme: "light",
        };
      } else {
        return { ...state, theme: "light" };
      }
  }
};
