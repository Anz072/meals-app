import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  const renderItemMeal = (itemData) => {
    const mealProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      Duration: itemData.item.duration,
      Complexity: itemData.item.complexity,
      Affordablity: itemData.item.affordability,
    };
    return <MealItem {...mealProps} />;
  };
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItemMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MealsOverview;
