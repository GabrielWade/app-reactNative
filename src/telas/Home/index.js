import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";


import TituloLogo from "./componentes/tituloLogo";
import BotaoCamera from "./componentes/botaoCamera";

export default function Index () {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar />
            <TituloLogo />
            <BotaoCamera/>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#025E14", 
    },
});