import { View, Text, StyleSheet, Image } from "react-native";

const MealDetails = ({ Duration, Complexity, Affordablity }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{Duration} M.</Text>
      <Text style={styles.detailItem}>{Complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{Affordablity.toUpperCase()}</Text>
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
export default MealDetails;
