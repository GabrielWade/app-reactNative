import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Produto1 from "../Descartar/produtos/produto1";
import Produto2 from "../Descartar/produtos/produto2";
import BotaoScanearNovamente from "../Descartar/componetes/botaoScanearNovamente";
export default function DescartarScreen({ route }) {
  const { productId } = route.params;

  let produtoComponent = null;
  if (productId === 1) {
    produtoComponent = <Produto1 />;
  } else if (productId === 2) {
    produtoComponent = <Produto2 />;
  }
  return (
    
    <View style={estilos.container}>
      {produtoComponent}
      <BotaoScanearNovamente />
    </View>
    
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#025E14",
  },
});