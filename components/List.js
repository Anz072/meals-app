import { View, Text, StyleSheet } from "react-native";

const List = (props) => {
    return (
      <>
        {props.arr.map((step, index) => (
          <Text style={styles.sectionContent} key={index}>
            {props.numbID + index + 1}. {step}
          </Text>
        ))}
      </>
    );
  };

const styles = StyleSheet.create({
  sectionContent: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
});

export default List;
