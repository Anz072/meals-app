import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

const MealItem = ({ title, imageUrl, Duration, Complexity, Affordablity }) => {
  const mealItemPress = () => {};

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
          <View style={styles.details}>
            <Text style={styles.detailItem}>{Duration} M.</Text>
            <Text style={styles.detailItem}>{Complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{Affordablity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

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
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
