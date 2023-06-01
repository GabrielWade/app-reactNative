import React from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";

export default function BotaoCamera() { 
  return (
    <View style={estilos.container}>
      <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>Escanear Código de Barras</Texto>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 50,
  },
  botao: {
    backgroundColor: "#FFBB00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
