import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Texto from "../../componentes/Texto";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const navigation = useNavigation();
  const handleBarCodeScanned = ({ type, data }) => {
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (data === "1234") {
      navigation.navigate('DescartarScreen', { productId: 1 });
    } else if (data === "4321") {
      navigation.navigate('DescartarScreen', { productId: 2 });
    }
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Texto style={styles.textoTitulo}>APONTE PARA O CÓDIGO DE BARRAS</Texto>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, {width:"50%", marginHorizontal:"25%"}]}
      />
      {scanned && <Button title={'Clique aara Escanear Novamente'} onPress={() => setScanned(false)} />}
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
