import React from "react";  
import { Image, StyleSheet, View, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";
import imgReciclagem from "../../../../assets/ICONE-RECILCAGEM.png";

//Esse código coleta o tamanho da tela
const width = Dimensions.get("screen").width;

export default function TituloLogo () {
    return(
    <View style={estilos.indexConteiner}>
        <Texto style={estilos.textoTitulo}>APONTE E DESCARTE</Texto>
        <Image source={imgReciclagem} style={estilos.imgReciclagem}/>
    </View>
    );
}

const estilos = StyleSheet.create({
    indexConteiner: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50%",
    },
    textoTitulo: {
        color: "#FFBB00",
        fontSize: 30,
        fontWeight: "bold",
    },
    imgReciclagem: {
        marginTop: "20%",
        width: "50%", //definimos a largura da imagem como 50% da largura da tela
        height: (512 / 512) * width * 0.5, //definimos a altura da imagem como 50% da largura da tela
    },
})
