import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Products() {

    return (
      <View style={styles.firstsection}>
        <Text>product screen</Text>
      </View>
    );

}
const styles = StyleSheet.create({
  firstsection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"lightblue"
  },
});
export default Products;
