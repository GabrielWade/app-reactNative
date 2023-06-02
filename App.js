import React from 'react';
import { Text } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


import CameraRotas from './src/rotas/cameraRotas';


export default function App() {
  const [fonteCarregada] = useFonts({
    "UbuntuBold": Ubuntu_700Bold, 
    "UbuntuRegular": Ubuntu_400Regular,
  });

  if (!fonteCarregada) {
    return <Text>Carregando...</Text>
  }

  return (
    <CameraRotas/>
  );
}

