import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsScreen({ route, navigation }) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meals) => {
        return meals.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
      navigation.setOptions({ title: categoryTitle });

    }, [navigation, categoryId]);

    const rendermealItem = (itemData) => {
        const item = itemData.item;
        const mealsProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };
        return (
           <MealItem {...mealsProps} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={rendermealItem} />
        </View>
    );
}

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
