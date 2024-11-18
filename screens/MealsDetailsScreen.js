import React, { useContext, useLayoutEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailsScreen({ route, navigation }) {
    const mealsContext = useContext(FavoritesContext)

  const { mealId } = route.params;
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    steps,
    ingredients,
  } = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = mealsContext.ids.includes(mealId)

  const toggleMealFavoriteStatus = () => {
    if(mealIsFavorite){
        mealsContext.removeFavorites(mealId)
    } 
    else {
        mealsContext.addFavorites(mealId)
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={toggleMealFavoriteStatus}>
            <Ionicons
              name= {mealIsFavorite ? "star" : "star-outline"}
              size={24}
              color="white"
              style={{ marginRight: 16 }}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, toggleMealFavoriteStatus, mealIsFavorite]);

  return (
    <ScrollView style={{ marginBottom: "20px" }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 300 }}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients </Text>
        </View>
        <View style={styles.listContainer}>
          <List data={ingredients} />
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps </Text>
        </View>
        <View style={styles.listContainer}>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  listContainer: {
    width: "80%",
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 8,
    marginHorizontal: 16,
  },

  detailItem: {
    marginHorizontal: 8,
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 8,
    color: "#fff",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 16,
    textAlign: "center",
    padding: 8,
  },
  subtitleContainer: {
    padding: 8,
    marginHorizontal: 24,
    marginVertical: 8,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
