import { Text, View, Pressable, StyleSheet, Platform } from "react-native";
import changeOpacityHexColor from "../helpers/colorChanger";
import { useState } from "react";

function CategoryGridTile({ title, colorx, onPress }) {
  const [rippleColor, setRippleColor] = useState({ color: "transparent" });

  const handlePress = () => {
    setRippleColor({ color: changeOpacityHexColor(colorx) });
    onPress();
  };


  return (
    <View style={[styles.gridItem, { backgroundColor: colorx }]}>
      <Pressable
        android_ripple={rippleColor}
        onPress={handlePress} 
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.gridItemInner}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2f2f2f",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "auto", android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  gridItemInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
