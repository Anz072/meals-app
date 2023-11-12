import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, View, Text } from "react-native";

const Favorites = () => {
  const favoriteMealscontext = useContext(FavoritesContext);
  const favorites = MEALS.filter((meal) =>
    favoriteMealscontext.ids.includes(meal.id)
  );
  return favorites.length == 0 ? (
    <View>
      <MealList items={favorites} />
    </View>
  ) : (
    <View style={styles.nofav}>
      <Text>No favorites.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nofav: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default Favorites;
