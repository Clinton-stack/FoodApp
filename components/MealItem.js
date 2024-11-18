import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) {
  const navigation = useNavigation();

  function onSelectHandler() {
    navigation.navigate("MealsDetails", { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={onSelectHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={{ width: "100%", height: 200 }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.43,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 8,
    marginHorizontal: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  detailItem: {
    marginHorizontal: 8,
  },
});
