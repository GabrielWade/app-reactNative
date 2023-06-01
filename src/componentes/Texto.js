import React from "react"; 
import { StyleSheet, Text } from "react-native";
export default function Texto({children, style}) {
    let estilo = estilos.textoNormal;
    if (style?.fontWeight === 'bold') {
        estilo = estilos.titulo;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    titulo: {
        fontFamily: "UbuntuBold", 
        fontWeight: "normal",
    },
    textoNormal: {
        fontFamily: "UbuntuRegular", 
        fontWeight: "normal", 
    },
});