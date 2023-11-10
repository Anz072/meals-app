import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const SpecificMeal = ({ route }) => {
  const mealID = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return (
    <View>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text>{selectedMeal.title}</Text>
      </View>
      <MealDetails
        Duration={selectedMeal.duration}
        Complexity={selectedMeal.complexity}
        Affordablity={selectedMeal.affordability}
      />
      <Text>Ingredients:</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps:</Text>
      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
export default SpecificMeal;
