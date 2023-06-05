import React from 'react';
import { View, StyleSheet } from 'react-native';
import PermissionComponent from '../Camera/componentes/PermissionComponent';
import BarcodeComponent from '../Camera/componentes/BarcodeComponent';
import { useNavigation } from "@react-navigation/native";
import Texto from "../../componentes/Texto";

export default function App() {
    const navigation = useNavigation();

  const handlePermissionGranted = () => {
    console.log('Camera permissão aceita');
  };

  const handlePermissionDenied = () => {
    console.log('Acesso negado a camera');
  };

  const handleBarcodeScanned = (type, data) => {
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (data === "1234") {
      navigation.navigate('DescartarScreen', { productId: 1 });
    } else if (data === "4321") {
      navigation.navigate('DescartarScreen', { productId: 2 });
    }
  };

  return (
    <View style={styles.container}>
      <PermissionComponent
        onPermissionGranted={handlePermissionGranted}
        onPermissionDenied={handlePermissionDenied}
      />
      <Texto style={styles.textoTitulo}>APONTE PARA O CÓDIGO DE BARRAS</Texto>
      <BarcodeComponent onBarcodeScanned={handleBarcodeScanned} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#025E14",
  },
  textoTitulo: {
    marginTop: "20%",
    textAlign: "center",
    color: "#FFBB00",
    fontSize: 30,
    fontWeight: "bold",
},
});
