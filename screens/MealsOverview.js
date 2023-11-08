import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({ navigation, route }) {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
});

  const renderItemMeal = (itemData) => {
    return (
      <MealItem item={itemData.item}/>
    );
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
