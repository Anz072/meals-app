import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  Duration,
  Complexity,
  Affordablity,
}) => {
  const navigation = useNavigation();
  const mealItemPress = () => {
    navigation.navigate("SpecificMeal", {
      mealID: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={mealItemPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerCont}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            Duration={Duration}
            Complexity={Complexity}
            Affordablity={Affordablity}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  innerCont: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: Platform.select({ ios: "0.5", android: "1" }),
  },
  mealItem: {
    margin: 16,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "auto", android: "hidden" }),
  },
});
export default MealItem;
