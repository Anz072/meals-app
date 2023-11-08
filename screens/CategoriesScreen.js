import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const pressAction = () => {
      navigation.navigate("MealsOverview", {categoryID:itemData.item.id});
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        colorx={itemData.item.color}
        onPress={pressAction}
      />
    );
  }

  return (
    <FlatList
      style={styles.root}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
});
export default CategoriesScreen;
