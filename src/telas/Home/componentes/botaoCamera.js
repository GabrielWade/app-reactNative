import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";

import { useNavigation } from "@react-navigation/native";


export default function BotaoCamera() { 
  const navigation = useNavigation();
  
  return (
    <View style={estilos.container}>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('CameraScreen')}>
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
