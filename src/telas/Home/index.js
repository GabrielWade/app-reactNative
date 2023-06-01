import React from "react";
import { StyleSheet, View } from "react-native";


import TituloLogo from "./componentes/tituloLogo";
import BotaoCamera from "./componentes/botaoCamera";

export default function Index () {
    return (
        <View style={estilos.container}>
            <TituloLogo />
            <BotaoCamera/>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#025E14", 
    },
});