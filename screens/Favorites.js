import { useSelector } from "react-redux";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

const Favorites = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favorites = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  return favorites.length !== 0 ? (
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
