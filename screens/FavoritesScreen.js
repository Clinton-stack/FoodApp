import React, { useContext } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  console.log(" here are the ids", ids);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  const navigation = useNavigation();

  function onSelectHandler(id) {
    navigation.navigate("MealsDetails", { mealId: id });
  }

  return (
    <ScrollView style={{ marginBottom: "20px" }}>
      {favoriteMeals.length === 0 ? (
        <Text>No favorite meals found. Start adding some!</Text>
      ) : (
        favoriteMeals.map((meal) => (
          <View key={meal.id} style={styles.mealItem}>
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => onSelectHandler(meal.id)} 
            >
              <View style={styles.innerContainer}>
                <View>
                  <Image
                    source={{ uri: meal.imageUrl }}
                    style={{ width: "100%", height: 200 }}
                  />
                  <Text style={styles.title}>{meal.title}</Text>
                </View>
                <View style={styles.details}>
                  <Text style={styles.detailItem}>{meal.duration}m</Text>
                  <Text style={styles.detailItem}>
                    {meal.complexity.toUpperCase()}
                  </Text>
                  <Text style={styles.detailItem}>
                    {meal.affordability.toUpperCase()}
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        ))
      )}
    </ScrollView>
  );
}

export default FavoritesScreen;

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
