import React from "react";
import { Text, StyleSheet, Dimensions, View, Image, ScrollView } from "react-native";  
import Texto from "../../../componentes/Texto";
import produto1 from "../../../mocks/produto1";

const width = Dimensions.get("screen").width;
export default function Produto1 () {
    return (
        <ScrollView>
            <View style={estilos.indexConteiner}>
                <Texto style={estilos.textoTitulo}>{produto1.topo.titulo}</Texto>
                <Image source={produto1.conteudo.imagem} style={estilos.imgProduto}/>
                <Texto style={estilos.TextoTitulo2}>{produto1.conteudo.titulo2}</Texto>
                <Texto style={estilos.textoTexto}>{produto1.conteudo.textoConteudo}</Texto>
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
        width: "50%", 
        height: (1024 / 1024) * width * 0.5, 
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
        fontWeight: "regular",
        marginHorizontal: "15%",
        textAlign: "justify",
    },
})