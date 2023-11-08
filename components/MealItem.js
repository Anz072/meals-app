import { View, Text, StyleSheet } from "react-native";

const MealItem = item => {
  return (
    <View>
      <Text>{item.item.title}</Text>
    </View>
  );
};

export default MealItem;
