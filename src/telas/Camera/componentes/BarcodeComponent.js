import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeComponent = ({ onBarcodeScanned }) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    onBarcodeScanned(type, data);
  };

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, {width:"50%", marginHorizontal:"25%"}]}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </>
  );
};

export default BarcodeComponent;
