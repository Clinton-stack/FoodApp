import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function List({data}) {
    console.log(data)
    
    return data.map((item) => (
      <View style={styles.listItem} key={item}>
        <Text style={styles.listItemText}>{item}</Text>
      </View>
    )) 
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },
    listItemText: {
        color: "#351401",
        textAlign: "center",
    },
})
