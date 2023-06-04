import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const PermissionComponent = ({ onPermissionGranted, onPermissionDenied }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    if (hasPermission === true) {
      onPermissionGranted();
    } else if (hasPermission === false) {
      onPermissionDenied();
    }
  }, [hasPermission, onPermissionGranted, onPermissionDenied]);

  if (hasPermission === null) {
    return <Text>Solicitando permissão para a câmera.</Text>;
  } else if (hasPermission === false) {
    return <Text>Sem acesso a câmera.</Text>;
  } else {
    return null;
  }
};

export default PermissionComponent;
