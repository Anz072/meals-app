import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "./MealList";

function MealsOverview({ navigation, route }) {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  return <MealList items={displayedMeals}/>
}

const styles = StyleSheet.create({});

export default MealsOverview;
