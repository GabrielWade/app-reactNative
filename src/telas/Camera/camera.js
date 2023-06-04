import React from 'react';
import { View, StyleSheet } from 'react-native';
import PermissionComponent from '../Camera/componentes/PermissionComponent';
import BarcodeComponent from '../Camera/componentes/BarcodeComponent';
import { useNavigation } from "@react-navigation/native";


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
    if (data === "1234" || data === "4321") {
        navigation.navigate('DescartarScreen'); 
    }
  };

  return (
    <View style={styles.container}>
      <PermissionComponent
        onPermissionGranted={handlePermissionGranted}
        onPermissionDenied={handlePermissionDenied}
      />
      <BarcodeComponent onBarcodeScanned={handleBarcodeScanned} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#025E14",
  },
});
