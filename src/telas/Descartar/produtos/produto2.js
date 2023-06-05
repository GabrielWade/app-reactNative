import React from "react";
import { Text, StyleSheet, Dimensions, View, Image, ScrollView } from "react-native";  
import Texto from "../../../componentes/Texto";
import produto2 from "../../../mocks/produto2";

const width = Dimensions.get("screen").width;
export default function Produto2 () {
    return (
        <ScrollView>
            <View style={estilos.indexConteiner}>
                <Texto style={estilos.textoTitulo}>{produto2.topo.titulo}</Texto>
                <Image source={produto2.conteudo.imagem} style={estilos.imgProduto}/>
                <Texto style={estilos.TextoTitulo2}>{produto2.conteudo.titulo2}</Texto>
                <Texto style={estilos.textoTexto}>{produto2.conteudo.textoConteudo}</Texto>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    indexConteiner: {
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    },
    textoTitulo: {
        color: "#FFBB00",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: "10%",
    },
    imgProduto: {
        marginTop: "10%",
        width: "40%", 
        height: (512 / 512) * width * 0.6, 
    },
    TextoTitulo2: {
        color: "#FFF",
        fontSize: 15,
        margin: "7%",
        fontWeight: "bold", 
    },
    textoTexto: {
        color: "#FFF",
        fontSize: 13,
        marginHorizontal: "15%",
        textAlign: "justify",
    },
})