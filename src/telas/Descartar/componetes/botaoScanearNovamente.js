import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "../../../componentes/Texto";

import { useNavigation } from "@react-navigation/native";


export default function BotaoScanearNovamente() { 
  const navigation = useNavigation();
  
  return (
    <View style={estilos.container}>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Home')}>
        <Texto style={estilos.textoBotao}>Escanear Novamente</Texto>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 50,
  },
  botao: {
    backgroundColor: "#FFBB00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "UbuntoRegular",
  },
});
