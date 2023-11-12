import { View, FlatList } from "react-native";
import MealItem from "../MealItem";


function MealList({items}) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItemMeal}
      />
    </View>
  );
}
export default MealList;
