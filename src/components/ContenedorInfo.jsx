import { View, Text,StyleSheet } from "react-native";
import React from "react";

const ContenedorInfo = ({titulo, importe}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.importe}>{importe}</Text>
    </View>
  );
};

export default ContenedorInfo;

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 150,
        backgroundColor: "#A5D0A8", // Pastel blue with transparency
        borderRadius: 15, // Rounded corners
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
        justifyContent: "center", // Center the text vertically
        alignItems: "center", // Center the text horizontally
        padding: 10,
        margin: 10,
        },
        titulo: {
        fontSize: 25,
        color: "#333", // Darker text for better contrast
        fontWeight: "bold",
        },
        importe: {
        fontSize: 35,
        color: "#555", // Slightly lighter text
        },
    });