import { View, Text, Pressable, StyleSheet} from "react-native";
import React from "react";

const BtnAddGasto = () => {
    return (
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Nuevo gasto</Text>
            </Pressable>
        </View>
    );
};

export default BtnAddGasto;

const styles = StyleSheet.create({
    button: {
        width: 100, // Ajusta el tamaño del botón según tus necesidades
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        elevation: 10, // Para Android
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 }, // Para iOS
        shadowOpacity: 0.3,
        shadowRadius: 8,
        backgroundColor: "red", // Necesario si usas una imagen de fondo
        // Puedes usar una imagen de textura de madera como fondo
        // source={require('./path/to/wood-texture.png')}
      },
      text: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        padding: 5,
        paddingBottom: 10
      },
    });