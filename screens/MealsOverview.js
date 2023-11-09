import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({ navigation, route }) {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  const renderItemMeal = (itemData) => {
    const mealProps = {
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
