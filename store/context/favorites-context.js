import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {console.log('reeeeeeeeee')},
  removeFavorite: (id) => {},
});

function FavoritesProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    console.log('reeeeeeeeee')
    setFavoriteMeals((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMeals((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesProvider;
