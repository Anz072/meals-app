import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../MealDetails";
import List from "../List";
import HeaderButton from "../HeaderButton";
import { FavoritesContext } from "../../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../../store/redux/favorites";

const SpecificMeal = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealID = route.params.mealID;
  let numbID = 0;
  const mealIsFavorite = favoriteMealIds.includes(mealID);
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const headerButtonHandler = () => {
    mealIsFavorite
      ? dispatch(removeFavorite({ id: mealID }))
      : dispatch(addFavorite({ id: mealID }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            title={mealIsFavorite ? "Remove" : "Add"}
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.root}>
      <View>
        <View>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
        </View>
        <MealDetails
          Duration={selectedMeal.duration}
          Complexity={selectedMeal.complexity}
          Affordablity={selectedMeal.affordability}
        />
        <Text style={styles.section}>Ingredients:</Text>
        {selectedMeal.ingredients.map((ingredient) => {
          return (
            <Text style={styles.sectionContent} key={ingredient}>
              {ingredient}
            </Text>
          );
        })}

        <Text style={styles.section}>Steps:</Text>
        <List numbID={numbID} arr={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 12,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 10,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    margin: 10,
  },
  sectionContent: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
});
export default SpecificMeal;
